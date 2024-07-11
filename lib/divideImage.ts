export function divideImages(imagePaths: string[]) {
   let colHeights: [number, number, number] = [0, 0, 0];
   const columnImages: [string[], string[], string[]] = [[], [], []];

   imagePaths.forEach((path) => {
      let shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));
      columnImages[shortestColumnIndex].push(path);

      const img = new Image();
      img.src = path;
      img.onload = function () {
         colHeights[shortestColumnIndex] += img.height / img.width;
      };
   });

   return columnImages;
}
