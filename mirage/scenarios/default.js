export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let profile = server.create('profile', {
    username: "pjvilloud",
    currency: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
  });
  let housings = server.createList('housing', 2, {profile: profile});
  housings.forEach(housing => {
    let meters = server.createList('meter', 3, {housing: housing});
    meters.forEach(meter => {
      server.createList('reading', 3, {meter: meter});

    })
  })
}
