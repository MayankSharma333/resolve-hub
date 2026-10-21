import { STATUS_CLASS, PRIORITY_CLASS } from "../utils/constants";
import { formatStatus } from "../utils/helpers";

function StatusBadge({ value, type = "status" }) {
  // Rang (CSS class) dhundo
  const colorClass =
    type === "priority" ? PRIORITY_CLASS[value] : STATUS_CLASS[value];

  return (
    <span className={"badge " + colorClass}>{formatStatus(value)}</span>
  );
}

export default StatusBadge;