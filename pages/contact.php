<?php
$root = dirname(__DIR__);
include $root . "./widget/initA.php";
?>
<div style="height: 200px" class="form-container">
    <div class="form">
        <label class="label" >Phone Number </label>
        <input minlength="8" maxlength="15" type="text">
    </div>
    <div class="form">
        <label class="label"> Email </label>
        <input minlength="3" type="text">
    </div>
    <div class="form">
        <label class="label">Text</label>
        <input minlength="3" maxlength="512" class="longtext" type="text">

    </div>
</div>

<?php include $root . "./widget/initB.php";
?>
