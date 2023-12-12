const vehicles = [];

    const app = new Vue({
      el: "#vehicles-list",
      data() {
        return {
          vehicles,
        };
      },
      mounted() {
        fetch("/get-vehicles")
          .then(response => response.json())
          .then(data => {
            this.vehicles = data;
          });
      },
      methods: {
        deleteVehicle(id) {
          fetch("/delete-vehicle?id=" + id)
            .then(() => {
              this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
            });
        },
      },
    });