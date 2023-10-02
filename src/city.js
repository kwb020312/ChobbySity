export function createCity(size) {
  const data = [];

  initialize();

  //   N * N 의 데이터 생성
  function initialize() {
    for (let x = 0; x < size; x++) {
      const column = [];
      for (let y = 0; y < size; y++) {
        const tile = {
          x,
          y,
          buildingId: undefined,
          update() {
            const x = Math.random();
            if (x < 0.01) {
              if (this.buildingId === undefined) {
                this.buildingId = "building-1";
              } else if (this.buildingId === "building-1") {
                this.buildingId = "building-2";
              } else if (this.buildingId === "building-2") {
                this.buildingId = "building-3";
              }
            }
          },
        };

        column.push(tile);
      }
      data.push(column);
    }
  }

  function update() {
    console.log(`Updating`);
    for (let x = 0; x < size; x++) {
      const column = [];
      for (let y = 0; y < size; y++) {
        data[x][y].update();
      }
    }
  }

  return {
    size,
    data,
    update,
  };
}
