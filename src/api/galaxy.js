import { router } from './router'

router.get('/galaxies', r => {
})
router.get('/galaxies/:galaxyName', r => {
})
router.get('/galaxies/:galaxyName/systems', r => {
})
router.get('/galaxies/:galaxyName/systems/:systemName', r => {
  console.log('get system', r)
})
router.get('/galaxies/:galaxyName/systems/:systemName/planets', r => {
  console.log('get planets', r)
})
router.get('/galaxies/:galaxyName/systems/:systemName/planets/:planetName', r => {
  console.log('get planet', r)
})

console.log(router)