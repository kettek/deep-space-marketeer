API calls
  * galaxies
    * load known galaxies
  * galaxies/<galaxy-id>
    * GET load target galaxy if near or known
    * PUT travel to given galaxy
  * galaxies/<galaxy-id>/planets
    * GET load planets for given galaxy
  * galaxies/<galaxy-id>/planets/<planet-id>
    * GET load planet info for given galaxy
    * PUT travel to given planet
  * galaxies/<galaxy-id>/planets/<planet-id>/trade
    * GET load trade info for planet
  * galaxies/<galaxy-id>/planets/<planet-id>/trade/<product-id>
    * GET list details of particular product
    * PUT buy quantities of product
    * DEL sell quantities of product
  * galaxies/<galaxy-id>/planets/<planet-id>/shipyard
    * GET load shipyard info for planet
  * galaxies/<galaxy-id>/planets/<planet-id>/shipyard/<ship-id>
    * GET load ship info
    * PUT trade in for ship?