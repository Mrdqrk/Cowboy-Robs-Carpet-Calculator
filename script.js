/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
  let room1Width = getRoomWidth(1);
  let room1Length = getRoomLength(1);
  let room2Width = getRoomWidth(2);
  let room2Length = getRoomLength(2);

  let areaRoom1 = room1Width * room1Length;
  let areaRoom2 = room2Width * room2Length;
  let totalArea = areaRoom1 + areaRoom2;
  totalArea *= 1.1;
  showResult(totalArea);
  console.log("click");

}
calculateCarpetTest();

/* LEVEL UP! (optional)
  1. Function explanations:


  2. Custom styles added:


*/