class Stack {
    constructor() {
        this.dataStruct = [];
        this.top = 0;
    }

    push(element) {
        this.dataStruct[this.top] = element;
        this.top += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow';
        }

        if (this.dataStruct.length > 0) {
            this.top -= 1;
            return this.dataStruct.pop();
        }
    }

    isEmpty() {
        if (this.dataStruct.length === 0) {
            return true;
        }
        else
            false;
    }

    length() {
        return this.top;
    }

    printStack() {
        let temp = '';

        if (this.isEmpty()) {
            return 'Stack Empty';
        }
        else if (this.dataStruct.length > 0) {
            for (let i = 0; i < this.dataStruct.length; ++i) {
                temp += this.dataStruct[i] + '\n';
            }
            return temp;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.dataStruct[this.top - 1];
        }
    }
}