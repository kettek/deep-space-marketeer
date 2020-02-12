import { createInstance, dropInstance } from 'localforage'

export const slotsDB = createInstance({
  name: 'slots',
})

const slotStorages = {}

export function getSlotDB(name) {
  if (!slotStorages[name]) {
    slotStorages[name] = createInstance({
      name: `slot__${name}`
    })
  }
  return slotStorages[name]
}

export function deleteSlotDB(name) {
  dropInstance({
    name: `slot__${name}`
  }).then(() => {
    console.log('deleteSlotDB', name)
  }).catch(e => {
    console.log('deleteSlotDB', e)
  })
}