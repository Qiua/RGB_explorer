$(document).ready(function () {

    //Hexadecimcal Function
    function hex(x) {
        x = Number(x);
        var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }

    function renderView(id, val) {
        var red = $("#red").val();
        var green = $("#green").val();
        var blue = $("#blue").val();

        //Render View
        $('#render_red').css('background-color', 'rgb(' + red + ', 0, 0)');
        $('#render_green').css('background-color', 'rgb(0, ' + green + ', 0)');
        $('#render_blue').css('background-color', 'rgb(0, 0, ' + blue + ')');

        $('span[class=hexcode_' + id + ']').text(hex(val));
    }

    //Slider Function
    $('input[type=range]').on("change mousemove", function () {
        var id = this.id;
        var val = this.value;

        $('input[class=' + id + ']').val(val);
        renderView(id, val);
    });

    //Text to slider
    $('input[type=number]').on("change click keyup mousewheel", function () {
        var id = $(this).attr('class');
        var val = this.value;

        $('input[id=' + id + ']').val(val);
        renderView(id, val);
    });

    //Mouse Wheel
    $('input[type=range]').on('mousewheel', function (event) {
        event.preventDefault();
        var e = event.originalEvent;
        var wheel = (e.wheelDelta) ? e.wheelDelta : -(e.detail || e.deltaY);
        var val = parseInt($(this).val());

        console.log(wheel)
        if (wheel > 0) {
            this.stepUp();
            val++;
        } else if (wheel < 0) {
            this.stepDown();
            val--;
        }
        $(this).change();
    });
});