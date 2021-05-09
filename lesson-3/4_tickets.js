const { v4: uuidv4 } = require('uuid');

function TicketSell() {

  let events = [];

  this.getEvents = () => events;

  this.createEvent = (event, price) => {
    const id = uuidv4().slice(0, 3); // not necessary
    events.push({
      eventName: event,
      ticketPrice: price,
      totalMoney: 0,
      soldTickets: [],
      eventId: id,
      update: function () {
        this.soldTickets.length ?
          this.totalMoney = this.ticketPrice * this.soldTickets.length :
          this.totalMoney = 0
      },
    });
    return id;
  }

  this.buyTicket = (eventName, id) => {
    if (events.length) {

      for (let i = 0; i < events.length; i++) {
        if (events[i].eventName === eventName && events[i].eventId === id) {

          // generate id for ticket
          const ticketId = uuidv4().slice(0, 6);

          events[i].soldTickets.push(ticketId);
          events[i].update();

          return ticketId;
        } else {
          console.log('ERROR! Unknown event.');
        }
      }
    }
  }

  this.returnTicket = (eventId, ticketId) => {
    events.forEach(event => {
      if (event.eventId === eventId) {
        event.soldTickets = event.soldTickets.filter(ticket => ticket !== ticketId);
        event.update();
      }
    })
  }
}

const ticketWindow = new TicketSell();

// create 1 event
const eventId = ticketWindow.createEvent('Concert', 500);

// create 2 tickets
const ticketId = ticketWindow.buyTicket('Concert', eventId);
const ticketId2 = ticketWindow.buyTicket('Concert', eventId);
console.log('events list', ticketWindow.getEvents());

// remove 1 ticket
ticketWindow.returnTicket(eventId, ticketId);
console.log('remove 1 ticket', ticketWindow.getEvents());