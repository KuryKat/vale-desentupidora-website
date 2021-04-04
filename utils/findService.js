module.exports = function findService (services, serviceName) {
  let found = false
  let foundService = {}
  services.forEach((service) => {
    const normalizeName = service.name.toLowerCase()
      .normalize('NFD')
      .replace(/[^a-zA-Z\s]/g, '')
      .replace('desentupimento de ', '')
      .replace(/\s/g, '-')

    if (normalizeName === serviceName) {
      found = true
      foundService = service
    }
  })

  return {
    found, foundService
  }
}
