const employees = [
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0499-683x1024.jpg",
        "name": "Желанов Дмитрий Вячеславович",
        "specialty": "Врач высшей категории, хирург, ортопед, ведущий имплантолог"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9535-683x1024.jpg",
        "name": "Сызмас Ирина Валерьевна",
        "specialty": "Врач высшей категории, хирург, пародонтолог, имплантолог"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0699-683x1024.jpg",
        "name": "Сызмас Андрей Валерьевич",
        "specialty": "Врач высшей категории, ортопед, имплантолог."
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9343-683x1024.jpg",
        "name": "Сенчилова Регина Вадимовна",
        "specialty": "Врач-стоматолог общей практики, стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0015-683x1024.jpg",
        "name": "Мулладжанова Екатерина Дильшотовна",
        "specialty": "Врач-стоматолог общей практики"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0116-683x1024.jpg",
        "name": "Купцов Александр Александрович",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9319-683x1024.jpg",
        "name": "Веселкова Мария Дмитриевна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9514-683x1024.jpg",
        "name": "Антипов Михаил Александрович",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2024/04/YARL3568-683x1024.jpg",
        "name": "Ляшенко Елена Александровна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2024/04/YARL3628-683x1024.jpg",
        "name": "Макарова Наталья Васильевна",
        "specialty": "Врач стоматолог-терапевт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2020/12/boroznova-695x1024.jpg",
        "name": "Борознова Оксана Вячеславовна",
        "specialty": "Врач-стоматолог общей практики, стоматолог-ортодонт"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0159-683x1024.jpg",
        "name": "Черненкова Кира Андреевна",
        "specialty": "Врач стоматолог общей практики, хирург, пародонтолог, имплантолог"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9815-683x1024.jpg",
        "name": "Хусаинова Илона Игоревна",
        "specialty": "Хирург, имплантолог и пародонтолог"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL9801-683x1024.jpg",
        "name": "Ржевцева Ирина Андреевна",
        "specialty": "Гигиенист стоматологический"
    },
    {
        "key": "doc",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0353-683x1024.jpg",
        "name": "Губанова Мария Леонидовна",
        "specialty": "Гигиенист стоматологический"
    },
    {
        "key": "assis",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0412-768x1152.jpg",
        "name": "Лысенков Владимир Иванович",
        "specialty": "Рентген-лаборант"
    },
    {
        "key": "assis",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0448-768x1152.jpg",
        "name": "Морозова Екатерина Вячеславовна",
        "specialty": "Старшая медсестра"
    },
    {
        "key": "admin",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL1137-768x1152.jpg",
        "name": "Сызмас Юлия Николаевна",
        "specialty": "Старший администратор"
    },
    {
        "key": "admin",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0383-768x1151.jpg",
        "name": "Федорова Елена Александровна",
        "specialty": "Координатор центра"
    },
    {
        "key": "admin",
        "photo": "https://www.cstom.ru/wp-content/uploads/2023/03/YARL0825-768x1152.jpg",
        "name": "Рымарева Виктория Андреевна",
        "specialty": "Координатор центра"
    }
];

const docContainer = document.querySelector('.list_doctors');
const assisContainer = document.querySelector('.list_assistents');
const adminContainer = document.querySelector('.list_admin');


employees.forEach(employee => {

    const docItem = document.createElement('div');
    docItem.className = 'one-doctor';
    
    const docImg = document.createElement('img');
    docImg.src = employee.photo;
    
    const docName = document.createElement('p');
    docName.textContent = employee.name;

    const docSpecialty = document.createElement('p');
    docSpecialty.textContent = employee.specialty;

    docItem.appendChild(docImg);
    docItem.appendChild(docName);
    docItem.appendChild(docSpecialty);

    if (employee.key == 'doc') {
        docContainer.appendChild(docItem);
    } else if (employee.key == 'assis'){
        assisContainer.appendChild(docItem);
    } else {
        adminContainer.appendChild(docItem);
    }
});