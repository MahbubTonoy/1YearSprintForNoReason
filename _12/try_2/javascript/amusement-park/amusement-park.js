/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  // throw new Error('Please implement the createVisitor function.');
  return {
    name,
    age,
    ticketId,
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  // throw new Error('Please implement the revokeTicket function.');
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  // throw new Error('Please implement the ticketStatus function.');
  if (tickets[ticketId]) {
    return "sold to " + tickets[ticketId];
  }
  if (tickets[ticketId] === null) {
    return "not sold";
  }
  return "unknown ticket id";
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  // throw new Error('Please implement the simpleTicketStatus function.');
  if (
    tickets[ticketId] ||
    tickets[ticketId] === "" ||
    tickets[ticketId] === 0 ||
    tickets[ticketId] === false
  ) {
    return tickets[ticketId];
  }
  return "invalid ticket !!!";
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  // throw new Error('Please implement the gtcVersion function.');
  if (visitor.gtc) {
    return visitor.gtc.version;
  } else {
    return undefined;
  }
}
