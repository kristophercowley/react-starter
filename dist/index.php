<?php
$vendorFile = array_shift(glob("./vendors.*.js"));
$appFile = array_shift(glob("./app.*.js"));
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
</head>
<body>
    <div id="app"></div>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="<?= $vendorFile; ?>"></script>
    <script src="<?= $appFile; ?>"></script>
</body>
</html>
