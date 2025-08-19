// Example data for machines & parts
const machines = {
  "Dent Puller": {
    name: "DENT PULLER SPOT 3888",
    parts: [
        {name: "DENT PULLER SPOT 3888", description: "DENT PULLER SPOT 3888 S/PH 3000A - TEM012N-COMB.", image: "Images/Dent Puller Spot 3888.png"},
        {name: "TORCH HEAD", description: "TORCH HEAD FOR SPOT 3888 - TEM242.", image: "Images/Torch Head.png"},      
        {name: "TORCH HANDLE WITH TRIGGER AND MICROSWITCH", description: "TORCH HANDLE WITH TRIGGER AND MICROSWITCH FOR SPOT 3888 - TEM243", image: "Images/Torch Handle.png"},    
        {name: "SPACER", description: "SPACER FOR TRIGGER FOR SPOT 3888 - TEM244", image: "Images/Spacer.png"},
        {name: "COMPLETE SET TORCH", description: "COMPLETE SET TORCH WITH 2M 70MM2 CABLE - TEM206N", image: "Images/Complete Torch.png"},
        {name: "SLIDING HAMMER", description: "SLIDING HAMMER FOR SPOT 3888 - TEM241", image: "Images/Sliding Hammer.png"},
        {name: "TRIANGLE WASHER HOLDER", description: "TRIANGLE WASHER HOLDER - TEM259", image: "Images/Triangle Holder.png"},
        {name: "SWITCH PCB", description: "SWITCH PCB - TEM076", image: "Images/Switch PCB.png"},
        {name: " POWER SWITCH", description: " POWER SWITCH - TEM077", image: "Images/Power Switch.png"},
        {name: "KNOB", description: "KNOB - TCB1127 Or TEM078", image: "Images/Knob.png"},
        {name: "VARIABLE RESISTOR", description: "VARIABLE RESISTOR - TEM079", image: "Images/Resistor.png"},
        {name: "TORCH CABLE", description: "TORCH CABLE - TEM080", image: "Images/Cable.png"},
        {name: "CONTROL CABLES", description: "CONTROL CABLES - TEM012N-C", image: "Images/Control Cable.png"},
        {name: "RECTIFIER", description: "SILICON CONTROLLED RECTIFIER - TEM083", image: "Images/Rectifier.png"},
        {name: " RADIATOR", description: " RADIATOR - TEM084", image: "Images/Diagram.png"},
        {name: "CIRCUIT BOARD", description: "CONTROL CIRCUIT BOARD PCB - TEM085", image: "Images/Circuit Board.png"},
        {name: "CENTRAL TRANSFORMER", description: "CENTRAL TRANSFORMER - TEM176", image: "Images/Transformer.png"},
        {name: "PLASTIC FOOT", description: "PLASTIC FOOT - TEM234", image: "Images/Plastic Foot.png"},
        {name: "WORK CLAMP", description: "WORK CLAMP - TEM249", image: "Images/Work Clamp.png"},
        {name: "HANDLE", description: "HANDLE - TEM134", image: "Images/Handle.png"},
        {name: "ACCESSORIES BOX", description: "ACCESSORIES BOX - TEM012N-A", image: "Images/Acc Box.png"},
        {name: "TROLLEY", description: "TROLLEY -TEM069", image: "Images/Trolley.png"},
        {name: "WASHERS", description: "ROUND, PENTAGON & TRIANGULAR - TEM162, TEM163 & TEC316 ", image: "Images/Washers.png"},
        {name: "BRASS CONNECTOR", description: "BRASS CONNECTOR - TEM159", image: "Images/Brass Connector.png"},
        {name: "WIGGLE WIRE", description: "WIGGLE WIRE COPPER COATED 10PCS - TEM208", image: "Images/Wiggle Wire.png"},
        {name: " CARBON ROD", description: " CARBON ROD - TEM156", image: "Images/Carbon Rod.png"},
        {name: "EXTRACTOR WITH PAD", description: "EXTRACTOR WITH PAD - TEM157", image: "Images/Extractor.png"},
        {name: "EARTH CABLE WITH CLAMP", description: "COMPLETE EARTH CABLE WITH CLAMP - TEM219", image: "Images/Earth Cable With Clamp.png"},
        {name: "SOCKET FOR ELECTRODE", description: "SOCKET FOR ELECTRODE - TEM180", image: "Images/Electrode.png"},        
      ]
      
  },
        
  "Nitrogen Welder": {
    name: "NITROGEN WELDER",
    parts: [
        {name: "NITROGEN WELDING SYSTEM COMPLETE", description: "Provides lifting force to raise the vehicle.", image: "Images/Nitrogen Welder.png"},
        {name: "GAS PUMP", description: "GAS PUMP FOR NITROGEN WELDING SYSTEM", image: "Images/Exploding Diagram.png"},
    ]
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
