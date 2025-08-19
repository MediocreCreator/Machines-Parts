// Example data for machines & parts
const machines = {
  "Dent Puller": {
    name: "DENT PULLER SPOT 3888",
    parts: [
        {name: "DENT PULLER SPOT 3888", description: "DENT PULLER SPOT 3888 S/PH 3000A - TEM012N-COMB 9106405925.", image: "Images/Dent Puller Spot 3888.png"},
        {name: "TORCH HEAD", description: "TORCH HEAD FOR SPOT 3888 - TEM242 9106405932.", image: "Images/Torch Head.png"},      
        {name: "TORCH HANDLE WITH TRIGGER AND MICROSWITCH", description: "TORCH HANDLE WITH TRIGGER AND MICROSWITCH FOR SPOT 3888 - TEM243", image: "Images/Torch Handle.png"},    
        {name: "SPACER", description: "SPACER FOR TRIGGER FOR SPOT 3888 - TEM244", image: "Images/Spacer.png"},
        {name: "COMPLETE SET TORCH", description: "COMPLETE SET TORCH WITH 2M 70MM2 CABLE - TEM206N 9106405930", image: "Images/Complete Torch.png"},
        {name: "SLIDING HAMMER", description: "SLIDING HAMMER FOR SPOT 3888 - TEM241 9106405931", image: "Images/Sliding Hammer.png"},
        {name: "TRIANGLE WASHER HOLDER", description: "TRIANGLE WASHER HOLDER - TEM259", image: "Images/Triangle Holder.png"},
        {name: "SWITCH PCB", description: "SWITCH PCB - TEM076", image: "Images/Switch PCB.png"},
        {name: " POWER SWITCH", description: " POWER SWITCH - TEM077", image: "Images/Power Switch.png"},
        {name: "KNOB", description: "KNOB - TCB1127 Or TEM078", image: "Images/Knob.png"},
        {name: "VARIABLE RESISTOR", description: "VARIABLE RESISTOR - TEM079", image: "Images/Resistor.png"},
        {name: "TORCH CABLE", description: "TORCH CABLE - TEM080", image: "Images/Cable.png"},
        {name: "CONTROL CABLES", description: "CONTROL CABLES - TEM012N-C", image: "Images/Control Cable.png"},
        {name: "RECTIFIER", description: "SILICON CONTROLLED RECTIFIER - TEM083 9106405934", image: "Images/Rectifier.png"},
        {name: " RADIATOR", description: " RADIATOR - TEM084", image: "Images/Diagram.png"},
        {name: "CIRCUIT BOARD", description: "CONTROL CIRCUIT BOARD PCB - TEM085 9106405933", image: "Images/Circuit Board.png"},
        {name: "CENTRAL TRANSFORMER", description: "CENTRAL TRANSFORMER - TEM176", image: "Images/Transformer.png"},
        {name: "PLASTIC FOOT", description: "PLASTIC FOOT - TEM234", image: "Images/Plastic Foot.png"},
        {name: "WORK CLAMP", description: "WORK CLAMP - TEM249 9106405935", image: "Images/Work Clamp.png"},
        {name: "HANDLE", description: "HANDLE - TEM134", image: "Images/Handle.png"},
        {name: "BRASS CONNECTOR", description: "BRASS CONNECTOR - TEM159", image: "Images/Brass Connector.png"},
        {name: "WIGGLE WIRE", description: "WIGGLE WIRE COPPER COATED 10PCS - TEM208", image: "Images/Wiggle Wire.png"},
        {name: " CARBON ROD", description: " CARBON ROD - TEM156", image: "Images/Carbon Rod.png"},
        {name: "EXTRACTOR WITH PAD", description: "EXTRACTOR WITH PAD - TEM157", image: "Images/Extractor.png"},
        {name: "EARTH CABLE WITH CLAMP", description: "COMPLETE EARTH CABLE WITH CLAMP - TEM219 9106405929", image: "Images/Earth Cable With Clamp.png"},
        {name: "SOCKET FOR ELECTRODE", description: "SOCKET FOR ELECTRODE - TEM180", image: "Images/Electrode.png"},
        {name: "ACCESSORIES BOX", description: "ACCESSORIES BOX - TEM012N-A", image: "Images/Acc Box.png"},
        {name: "TROLLEY", description: "TROLLEY -TEM069", image: "Images/Trolley.png"},
        {name: "WASHERS", description: "ROUND 9106405905, PENTAGON 9106405900  & TRIANGULAR 9106405898 - TEM162, TEM163 & TEC316 ", image: "Images/Washers.png"},        
      ]
      
  },
        
  "Plastic Welder": {
    name: "PLASTIC WELDER",
    parts: [
        {name: "HYBIRD PLASTIC WELDER", description: "DIGITAL HYBIRD PLASTIC WELDER 1PH/230V - TEM014 9106405911", image: "Images/Hybrid Plastic Welder.png"},
        {name: "STAPLES FLAT SMALL", description: "STANDARD STAPLES 0.8MM(FLAT SMALL WAVE) - TEM181 9106405912", image: "Images/Staples Flat Small Wave.png"},
        {name: "STAPLES INSIDE CORNER", description: "STANDARD STAPLES 0.8MM (INSIDE CORNER SMALL WAVE) - TEM182 9106405913", image: "Images/Staples Inside Corner.png"},
        {name: "STAPLES FLAT SQUARE", description: " STANDARD STAPLES 0.8MM ( FLAT SQUARE WAVE) - TEM182 9106405914", image: "Images/Staples Flat Square.png"},
        {name: "PLASTIC ROD PP 7MM", description: "WELDING PLASTIC ROD PP 7MM FLAT/BLACK - TEM282 9106405909", image: "Images/Plastic Rod 7PP.png"},
        {name: "PLASTIC ROD PE 7MM", description: "WELDING PLASTIC ROD PE 7MM FLAT/BLACK - TEM283 9106405919", image: "Images/Plastic Rod 7PE.png"},
        {name: "PLASTIC ROD ABS 5MM", description: "WELDING PLASTIC ROD ABS 5MM FLAT/BLACK - TEM284 9106405921", image: "Images/Plastic Rod 5ABS.png"},
        {name: "PP BLACK 5MM PROFILE WELDING ROD", description: "PP BLACK 5MM PROFILE WELDING ROD - TEM274 9106405916", image: "Images/Welding Rod 5mm PP.png"},
        {name: "HDPE BLACK 5MM PROFILE WELDING ROD", description: "HDPE BLACK 5MM PROFILE WELDING ROD - TEM275 9106405917", image: "Images/Welding Rod 5mm HDPE.png"},
    ]
  },

  "Nitrogen Welder": {
    name: "NITROGEN WELDER",
    parts: [
      {name: "NITROGEN WELDING SYSTEM", description: "TEMPIR NITROGEN WELDING SYSTEM COMPLETE - TEM023 9106405940", image: "Images/Nitrogen Welder.png"},
      {name: " HEATING TORCH COVER", description: " HEATING TORCH COVER - TEM298 9106405923", image: "Images/Heating Torch.png"},
      {name: "HEATING COIL", description: "HEATING COIL - TEM281 9106405922", image: "Images/Heating Coil.png"},
    ]
  },

  "Air Hose": {
    name: "AIR HOSE FITTINGS",
    parts: [
      {name: "QUICK COUPLER", description: "UNIV QUICK COUPLE - AST023 9106405823", image: "Images/AST023 - Quick Coupler.png"},
      {name: "AIR FITTING", description: "AIR FITTING INSERT MALE 8MM - AST024 9406405024", image: "Images/AST024 - Air Fitting.png"},
      {name: "GUN INSERT", description: "HOSE INSERT FEMALE 8MM AST025 - 9106405825", image: "Images/AST025 Hose Insert Female.png"},
      {name: "MALE BARB 8MM", description: "MALE BARB 8MM - AST026 9106405826", image: "Images/AST026 - Male Barb.png"},
      {name: "HOSE FITTING", description: "HOSE FITTING FOR COUPLER - AST027 9106405827", image: "Images/AST027 - Hose Fitting.png"},
      
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
