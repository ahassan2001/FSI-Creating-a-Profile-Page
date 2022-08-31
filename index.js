
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let header3 = document.createElement('h3')

header3.append('Description:')
content.append(header3)

let paragraph = document.createElement('p')
paragraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
content.append(paragraph)

let feedingTimes = document.createElement('h3')
feedingTimes.append('Feeding Times:')
content.append(feedingTimes)

let user1 = document.createElement('li')
user1.append('9:00 am')
content.append(user1)
let user2= document.createElement('li')
user2.append('12:00 pm')
content.append(user2)
let user3 = document.createElement('li')
user3.append('5:00 pm')
content.append(user3)
