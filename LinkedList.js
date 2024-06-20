import { Node } from "./Node.js";

class LinkedList {

    constructor() {
        this.listHead = null;
    }
    
    // Add a new node containing value to the end of the list.
    append(value) {
        if (this.listHead === null) {
            // If list is empty, set newly created node as the head.
            this.listHead = new Node(value);
        } else {
            // Start from the head node.
            let currentNode = this.listHead;

            // While next node isn't null, keep on traversing the nodes.
            // Once the next node is null, stop traversing.
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            // Set the current node's next to be the newly created node.
            // Set the newly created node's next to be null.
            currentNode.next = new Node(value);
            currentNode.next.next = null;
        }
    }

    // Add a new node containing value to the start of the list.
    prepend(value) {
        if (this.listHead === null) {
            // If list is empty, set newly created node as the head.
            this.listHead = new Node(value);
        } else {
            // Start from the head node.
            let currentNode = this.listHead;

            // Set the new list head.
            this.listHead = new Node(value);

            // Make the new list head point to the previous list head.
            this.listHead.next = currentNode;
        }
    }

    // Return the total number of nodes in the list.
    size() {
        let counter = 0;
        let currentNode = this.listHead;

        while (currentNode !== null) {
            counter += 1;
            currentNode = currentNode.next;
        }

        return counter;
    }

    // Return the first node in the list.
    head() {
        return this.listHead.value;
    }

    // Return the last node in the list.
    tail() {
        // Start from the head node.
        let currentNode = this.listHead;

        // Traverse nodes until we reach the last node.
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode.value;
    }

    // Return the node at the given index.
    at(index) {
        // Return null if the index given is out of bounds of the list,
        // a negative number, or not an integer.
        if ((index + 1) > this.size() || index < 0 || !Number.isInteger(index)) {
            return null;
        } else {
            // Start from the head node.
            let currentNode = this.listHead;
            let currentIndex = 0;

            // Traverse the nodes up to the specified index.
            while (currentIndex !== index) {
                currentNode = currentNode.next;
                currentIndex += 1;
            }

            return currentNode.value;
        }
    }

    // Remove the last element from the list.
    pop() {
        let currentNode = this.listHead;

        if (currentNode === null) {
            return;
        } else if (this.size() === 1) {
            // If list size is 1, reset head of list.
            this.listHead = null;
        } else {
            // Traverse until the current node is the 2nd last node.
            while (currentNode.next.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = null;
        }
    }

    // Return true if the passed in value is in the list, otherwise
    // return false.
    contains(value) {
        let currentNode = this.listHead;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            
            currentNode = currentNode.next;
        }

        return false;
    }

    // Return the index of the node containing the value, or null if
    // not found.
    find(value) {
        let currentNode = this.listHead;
        let currentIndex = 0;

        // Return true if a match is found.
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            
            currentIndex += 1;
            currentNode = currentNode.next;
        }

        // Return null if the value isn't found.
        return null;
    }

    // Represent the LinkedList object as a string, so we can print
    // them out and preview them in the console. The format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        // Start from the head node.
        let currentNode = this.listHead;
        let string = "";

        while (currentNode !== null) {
            string = string.concat("( ", currentNode.value, " ) -> ");
            currentNode = currentNode.next;
        }

        string = string.concat("null");
        return string;
    }

    // Insert a new node with the provided value at the given index.
    insertAt(value, index) {
        let currentIndex = 0;
        let currentNode = this.listHead;
        let previousNode = null;

        // If index provided is negative or index argument is not an
        // integer, exit the function.
        if (index < 0 || !Number.isInteger(index)) {
            return;
        }

        // If index provided is 0, modify the head of the list and exit
        // the function.
        if (index === 0) {
            this.listHead = new Node(value);
            this.listHead.next = currentNode;
            return;
        }

        // Traverse nodes until we either reach the intended index, or
        // we reach null (whichever comes first).
        while (currentIndex < index && currentNode !== null) {
            currentIndex += 1;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = new Node(value);
        previousNode.next.next = currentNode;
    }

    // Remove node at the given index.
    removeAt(index) {
        let currentIndex = 0;
        let currentNode = this.listHead;
        let previousNode = null;

        // If index provided is negative, index argument is not an
        // integer, or the list is empty, exit the function.
        if (index < 0 || !Number.isInteger(index) || currentNode === null) {
            return;
        }

        // If index provided is 0, or the list only has 1 node, modify
        // the head of the list and exit the function.
        if (index === 0 || this.size() === 1) {
            this.listHead = this.listHead.next;
            return;
        }

        // If list has 2 or more nodes, traverse nodes until we either
        // reach the intended index, or we reach the last node in the
        // list (whichever comes first).
        while (currentIndex < index && currentNode.next !== null) {
            currentIndex += 1;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // Make the previous node point to the node after the current
        // one, effectively removing the current node from the list.
        previousNode.next = currentNode.next;
    }
}

export { LinkedList }