import AppKit
import CoreImage

let inputPath = "/Users/LUH17/.gemini/antigravity/brain/5e102b9d-0ad7-4027-9b58-bc38fe244c91/media__1786293868093.png"
let blackPath = "/Users/LUH17/.gemini/antigravity/scratch/seo-agency-web/public/logo-black.png"
let whitePath = "/Users/LUH17/.gemini/antigravity/scratch/seo-agency-web/public/logo-white.png"

guard let image = NSImage(contentsOfFile: inputPath),
      let tiffData = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: tiffData) else {
    print("Failed to load image")
    exit(1)
}

let width = bitmap.pixelsWide
let height = bitmap.pixelsHigh

guard let blackBitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: width * 4,
    bitsPerPixel: 32
), let whiteBitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: width * 4,
    bitsPerPixel: 32
) else {
    print("Failed to create bitmaps")
    exit(1)
}

for y in 0..<height {
    for x in 0..<width {
        let color = bitmap.colorAt(x: x, y: y) ?? NSColor.black
        let brightness = (color.redComponent + color.greenComponent + color.blueComponent) / 3.0
        
        if brightness > 0.3 {
            let alpha = min(1.0, (brightness - 0.2) * 1.5)
            blackBitmap.setColor(NSColor(calibratedRed: 0, green: 0, blue: 0, alpha: alpha), atX: x, y: y)
            whiteBitmap.setColor(NSColor(calibratedRed: 1, green: 1, blue: 1, alpha: alpha), atX: x, y: y)
        } else {
            blackBitmap.setColor(NSColor(calibratedRed: 0, green: 0, blue: 0, alpha: 0), atX: x, y: y)
            whiteBitmap.setColor(NSColor(calibratedRed: 0, green: 0, blue: 0, alpha: 0), atX: x, y: y)
        }
    }
}

if let blackData = blackBitmap.representation(using: .png, properties: [:]) {
    try? blackData.write(to: URL(fileURLWithPath: blackPath))
}
if let whiteData = whiteBitmap.representation(using: .png, properties: [:]) {
    try? whiteData.write(to: URL(fileURLWithPath: whitePath))
}
print("Logos successfully created in /public!")
