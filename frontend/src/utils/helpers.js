// IN_PROGRESS  ->  IN PROGRESS
export function formatStatus(status) {
  return status ? status.replace("_", " ") : "";
}

// "Anvith S"  ->  "A"
export function getInitial(name) {
  return name ? name.charAt(0).toUpperCase() : "";
}

// 1001  ->  #RH-1001
export function formatTicketNumber(id) {
  return "#RH-" + id;
}