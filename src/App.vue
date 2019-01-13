<template>
  <div>
    <Navbar />

    <div class="container-fluid">
      <div class="row">
        <Sidebar />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

          <MyChart />

          <MyTable />

        </main>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MyChart from "./components/MyChart.vue";
import MyTable from "./components/MyTable.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Navbar, MyChart, MyTable, Sidebar },
  mounted: function() {
    // replace icons, https://github.com/feathericons/feather#featherreplaceattrs
    feather.replace();
  }
}
</script>

<style>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>