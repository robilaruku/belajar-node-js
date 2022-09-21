import dns from 'dns/promises'

const ip = await dns.lookup('www.rumahcoding.co.id')

console.info(ip)