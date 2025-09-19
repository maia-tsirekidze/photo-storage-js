function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  let mb = hardDriveSizeGb * 1000;
  
  return Math.floor( mb/photoSizeMb);
}
console.log(numberOfPhotos(3.5, 750))