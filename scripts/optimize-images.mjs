// optimize-images.mjs: regenerates /assets/img/clinic from /photos-source.
// Planned steps per photo: fix EXIF orientation, strip metadata, resize to
// 1600/800/400 px wide, export WebP (q~78) + progressive JPEG (q~80).
// TODO (phase 3): choose the tool (Node + sharp needs approval as an npm dependency).
