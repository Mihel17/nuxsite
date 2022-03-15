<!DOCTYPE html>
<html class="page" lang="ru">

@@include('layout/head.html')

<body class="page__body">
  <?php require 'layout/TEST/GET_FROM_BACKEND_header.php'; ?>

  <main class="page__main  main-content">
    <?php require 'layout/TEST/GET_FROM_BACKEND_breadcrumbs.php'; ?>


    <div class="container  container--pricing">
      <h1 class="gradient  title  title--pricing">PRICING</h1>
      <!-- H1 -->
      <?php require 'layout/section/pricing.php'; ?>
      <!-- SECTION-PRICING -->
    </div>
    <!-- CONTAINER-PRICING -->

  </main>
<!-- MAIN-CONTENT -->


  <?php require 'layout/TEST/GET_FROM_BACKEND_footer.php'; ?>
  <script src=" ./js/script.js" type="module">
  </script>
</body>
</html>
