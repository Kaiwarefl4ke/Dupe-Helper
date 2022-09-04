//
const horseChestLooter = false;
const autoLootHorseChest = () => {
  try {
    if (Player.getOpenedInventory().getName().includes("Chest")) {
      new Thread(() => {
        for (let i = 0; i < 35; i++) {
          getOpenedInventory().getStackInSlot(i)
          Thread.sleep(50);
        }
      })
    }
  } catch (e) { 
    ChatLib.chat("[HorseChestLooter]: Error!");
  }
}

const autoResmelt = () => {
  try {
    if (Player.getOpenedInventory().getName().includes("再精錬")) {
      for (let j = 0; j < 35; j++) {
        if (Player.getInventory(j).getName().includes("聖剣")) {
          Player.getInventory().click(j, true);
        }
      }
    }
  } catch {
    ChatLib.chat("[AutoResmelt]: Error!");
  }
}

register("GuiOpened", () => {
  if (horseChestLooter === true) {
    autoLootHorseChest();
  }
});
