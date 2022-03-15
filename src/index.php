<!DOCTYPE html>
<html class="page" lang="ru">

@@include('layout/head.html')

<body class="page__body">
  <?php require 'layout/TEST/dont_copy_header_get_from_backend.php'; ?>

  <main class="page__main  main-content">
    <?php require 'layout/TEST/dont_copy_breadcrumbs_get_from_backend.php'; ?>


    <div class="container  container--pricing">
      <h1 class="zcwf_title  gradient  title  title--pricing">PRICING</h1>
      <!-- H1 -->
      <?php require 'layout/section/pricing.php'; ?>
      <!-- SECTION/PRICING -->
    </div>
    <!-- CONTAINER-PRICING -->

  </main>
<!-- MAIN-CONTENT -->


  <?php require 'layout/TEST/dont_copy_footer_get_from_backend.php'; ?>
  <script src=" ./js/script.js" type="module">
  </script>
</body>
</html>
