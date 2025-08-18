// Example data for machines & parts
const machines = {
  "dentPuller": {
    name: "Dent Puller Spot 3888",
    parts: {
      1: {
        name: "Dent Puller Unit Complete",
        description: "DENT PULLER SPOT 3888 S/PH 3000A TEM012N-COMB.",
        image: "Images/Dent Puller Spot 3888.png"
      },
      2: {
        name: "Complete Torch",
        description: "COMPLETE TORCH FOR PLASTIC WELDER TEM047.",
        image: "Images/Torch Complete For Plastic Welding.png"
      },
      
      3: {
        name: "Accessories Box",
        description: " ACCESSORIES BOX FOR SPOT 3888 (INCLUDING PARTS) TEM012N-A.",
        image: "Images/Acc Box.png"
      },

      4: {
        name: "Trolley",
        description: " TROLLEY FOR 3888 SPOT TEM069.",
        image: "Images/Trolley.png"
      },
    }
  },
  "Nitrogen Welder": {
    name: "Nitrogen Welder",
    parts: {
      hydraulicPump: {
        name: "Nitrogen Welder Complete",
        description: "Provides lifting force to raise the vehicle.",
        image: "Images/Nitrogen Welder.png"
      },
      safetyLock: {
        name: "Safety Lock",
        description: "Ensures the lift stays in place during operation.",
        image: "lock.png"
      }
    }
  }
};

// Populate first dropdown with machines
const machineSelect = document.getElementById("machineSelect");
const partSelect = document.getElementById("partSelect");
const partDesc = document.getElementById("partDesc");
const partImage = document.getElementById("partImage");

// Add machine options
Object.keys(machines).forEach(key => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = machines[key].name;
  machineSelect.appendChild(option);
});

// Handle machine selection
machineSelect.addEventListener("change", () => {
  const selectedMachine = machines[machineSelect.value];

  // Reset part dropdown
  partSelect.innerHTML = '<option value="">-- Choose a part --</option>';
  partSelect.disabled = true;

  if (selectedMachine) {
    // Populate parts
    Object.keys(selectedMachine.parts).forEach(partKey => {
      const option = document.createElement("option");
      option.value = partKey;
      option.textContent = selectedMachine.parts[partKey].name;
      partSelect.appendChild(option);
    });
    partSelect.disabled = false;
  }

  // Reset details
  partDesc.textContent = "Please select a part.";
  partImage.src = "";
});

// Handle part selection
partSelect.addEventListener("change", () => {
  const machine = machines[machineSelect.value];
  const part = machine.parts[partSelect.value];

  if (part) {
    document.querySelector(".details h2").innerText = part.name;
    partDesc.textContent = part.description;
    partImage.src = part.image;
  }
});
