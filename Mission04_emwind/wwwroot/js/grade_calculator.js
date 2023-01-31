$("#calcGrade").click(function () {
    var gradePct = (parseFloat($("#assign").val()) * .5 + parseFloat($("#quiz").val()) * .1 + parseFloat($("#group").val()) * .1 + parseFloat($("#intex").val()) * .1 + parseFloat($("#midterm").val()) * .1 + parseFloat($("#final").val()) * .1 )

    var letterGrade
    if (gradePct >= 94 && gradePct < 100) {
        letterGrade = "A"
    }
    else if (gradePct >= 90) {
        letterGrade = "A-"
    }
    else if (gradePct >= 87) {
        letterGrade = "B+"
    }
    else if (gradePct >= 84) {
        letterGrade = "B"
    }
    else if (gradePct >= 80) {
        letterGrade = "B-"
    }
    else if (gradePct >= 77) {
        letterGrade = "C+"
    }
    else if (gradePct >= 74) {
        letterGrade = "C"
    }
    else if (gradePct >= 70) {
        letterGrade = "C-"
    }
    else if (gradePct >= 67) {
        letterGrade = "D+"
    }
    else if (gradePct >= 64) {
        letterGrade = "D"
    }
    else if (gradePct >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    document.getElementById('gradeOutput').textContent = gradePct + "%" + " " + letterGrade
})