function Card(row, questionNbr, title, question, score) {
    let $card = $('<div>', {
        class: "card m-1",
        style: "width: 12rem;"
    });
    let $img = $('<img>', {
        class: "card-img-top",
        src: "../images/Calculus.jpeg",
        alt: "Card image cap"
    });
    let $cardBody = $('<div>', {
        class: "card-body"
    });
    let $cardTitle = $('<h5>', {
        class: "card-title",
        text: title
    });
    let $cardQuestion = $('<p>', {
        class: "card-text",
        text: question
    });
    let $dropdown = $('<div>', {
        class: "dropdown"
    });
    let $dropdownBtn = $('<button>', {
        class: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: questionNbr,
        'data-toggle': "dropdown",
        'aria-haspopup': "true",
        'aria-expanded': "false",
        text: score[0]
    });
    let $dropdownMenu = $('<div>', {
        class: "dropdown-menu",
        'aria-labelledby': "dropdownMenuButton"
    });
    const dropdownItem = (text, index) => {
        let $dropdownItem = $('<a>', {
            class: "dropdown-item",
            id: index,
            href: "#",
            text: text
        });
        $dropdownMenu.append($dropdownItem)
    }
    score.forEach((x, index) => dropdownItem(x, index));

    $(row).append($card.append($img, $cardBody.append($cardTitle, $cardQuestion, $dropdown.append(
        $dropdownBtn, $dropdownMenu))))
}

var card1 = new Card('#row1', 'question1', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card2 = new Card('#row1', 'question2', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card3 = new Card('#row1', 'question3', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card4 = new Card('#row1', 'question4', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card5 = new Card('#row1', 'question5', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card6 = new Card('#row2', 'question6', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card7 = new Card('#row2', 'question7', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card8 = new Card('#row2', 'question8', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card9 = new Card('#row2', 'question9', 'math', 'calc', ['1', '2', '3', '4', '5'])
var card10 = new Card('#row2', 'question10', 'math', 'calc', ['1', '2', '3', '4', '5'])

$('.dropdown-toggle').on('click', function () {
    $('.dropdown-item').on('click', function () {
        $(this.closest(".dropdown")).find('.btn').html($(this).html())
    })
})


$('#submitBtn').on('click', () => {

    //TODO validate form submition.
    let user = {
        name: $('#name').val(),
        img: $('#userImg').val(),
        scores: [4, 3, 2, 0, 1, 1, 3, 4, 1, 4]
    };

    console.log(user)

    $.post("/api/friends", user, (data) => {
        let {
            name,
            stats,
            imgLink,
            about
        } = data

        let $card = $('<div>', {
            class: "card",
            style: "width: 18rem;"
        });
        let $img = $('<img>', {
            class: "card-img-top",
            src: "http://via.placeholder.com/288x200",
            alt: "Card image cap"
        });
        let $cardBody = $('<div>', {
            class: "card-body"
        });
        let $cardName = $('<h5>', {
            class: "card-title",
            id: "matchName",
            text: "Match Name"
        });
        let $cardAbout = $('<p>', {
            class: "card-title",
            id: "matchName",
            text: "About Match"
        });
        let $homeBtn = $('<a>', {
            href: "#",
            class: "btn btn-primary",
            text: "Go back Home"
        });
        $('#modal').append($card.append($img, $cardBody.append($cardName, $cardAbout, $homeBtn)))
        $('#modal').modal('show');
    });
})