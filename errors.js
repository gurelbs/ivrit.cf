function hendleErrors(){
  process.on('beforeExit', code => {
    // Can make asynchronous calls
    setTimeout(() => {
      console.log(`Process will exit with code: ${code}`)
      process.exit(code)
    }, 100)
  })
  process.on('exit', code => {
    // Only synchronous calls
    console.log(`Process exited with code: ${code}`)
  })
  process.on('SIGTERM', signal => {
    console.log(`Process ${process.pid} received a SIGTERM signal`)
    process.exit(0)
  })
  process.on('SIGINT', signal => {
    console.log(`Process ${process.pid} has been interrupted`)
    process.exit(0)
  })
  process.on('uncaughtException', err => {
    console.log(`Uncaught Exception: ${err.message}`)
    process.exit(1)
  })
  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled rejection at ', promise, `reason: ${err.message}`)
    process.exit(1)
  })
}
module.exports = {hendleErrors}
