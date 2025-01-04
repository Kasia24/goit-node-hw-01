function log(message, type = "info") {
  const timestamp = new Date().toISOString();
  switch (type) {
    case "info":
      console.log(`ℹ️ [INFO] ${timestamp} - ${message}`);
      break;
    case "error":
      console.error(`❌ [ERROR] ${timestamp} - ${message}`);
      break;
    case "warning":
      console.warn(`⚠️ [WARNING] ${timestamp} - ${message}`);
      break;
    default:
      console.log(`[LOG] ${timestamp} - ${message}`);
  }
}

module.exports = { log };
