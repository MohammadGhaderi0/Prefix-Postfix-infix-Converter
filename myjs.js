let text ;
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
document.getElementById("btn").onclick = function(){
    text = document.getElementById("box").value;
    if(Array.from(text)[0]=="+"||Array.from(text)[0]=="-"||Array.from(text)[0]=="*"||Array.from(text)[0]=="/"||Array.from(text)[0]=="%"||Array.from(text)[0]=="^"){
        console.log("prefix");
        preToPost(text);
        PretoIn(text);
    }
    else if (text.charAt(text.length - 1)=="+"||text.charAt(text.length - 1)=="-"||text.charAt(text.length - 1)=="*"||text.charAt(text.length - 1)=="/"||text.charAt(text.length - 1)=="%"||text.charAt(text.length - 1)=="^"){
        console.log("postfix");
        postToPre(text);
        PostToIn(text);
    }    
    else{
        infixToPostfix(text);
        infixToPrefix(text);
        
    }

    }       

function isOperator(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

function preToPost(pre_exp)
    {
  
        let s = [];
  
        // length of expression
        let length = pre_exp.length;
  
        // reading from right to left
        for (let i = length - 1; i >= 0; i--)
        {
  
            // check if symbol is operator
            if (isOperator(pre_exp[i]))
            {
                // pop two operands from stack
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                // concat the operands and operator
                let temp = op1 + op2 + pre_exp[i];
  
                // Push String temp back to stack
                s.push(temp);
            }
  
            // if symbol is an operand
            else {
                // push the operand to the stack
                s.push(pre_exp[i] + "");
            }
        }
  
        // stack contains only the Postfix expression
        let answer = (s[s.length - 1]);
        txt2.innerHTML = `Prefix to Postfix: ${answer}`;
    }
function PretoIn(str)
    {
        let stack = [];
 
        // Length of expression
        let l = str.length;
 
        // Reading from right to left
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                // Concat the operands and operator
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                // To make character to string
                stack.push(c + "");
            }
        }
        let answer = stack[stack.length - 1];
        txt1.innerHTML = `Prefix to Infix: ${answer}`;
    }

function postToPre(post_exp)
    {
        let s = [];
  
        // length of expression
        let length = post_exp.length;
  
        // reading from right to left
        for (let i = 0; i < length; i++) {
  
            // check if symbol is operator
            if (isOperator(post_exp[i])) {
  
                // Pop two operands from stack
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                // concat the operands and operator
                let temp = post_exp[i] + op2 + op1;
  
                // Push String temp back to stack
                s.push(temp);
            }
  
            // if symbol is an operand
            else {
  
                // Push the operand to the stack
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        txt1.innerHTML = `Postfix to Prefix: ${ans}`;
    }
     
    function isOperand(x)
{
    return (x >= 'a' && x <= 'z') ||
            (x >= 'A' && x <= 'Z');
}
    
    
    function PostToIn(exp)
    {
        let s = [];
       
        for (let i = 0; i < exp.length; i++)
        {
            // Push operands
            if (isOperand(exp[i]))
            {
            s.push(exp[i] + "");
            }
       
            // We assume that input is
            // a valid postfix and expect
            // an operator.
            else
            {
                let op1 = s.pop();
                 
                let op2 = s.pop();
                s.pop();
                s.push("(" + op2 + exp[i] +
                        op1 + ")");
            }
        }
       
        // There must be a single element
        // in stack now which is the required
        // infix.
        let answer =s[s.length-1];
        txt2.innerHTML = `Postfix to Infix: ${answer}`;
    }


    function prec(c) {
        if(c == '^')
            return 3;
        else if(c == '/' || c=='*')
            return 2;
        else if(c == '+' || c == '-')
            return 1;
        else
            return -1;
    }
  
    
    function infixToPostfix(s) {
  
        let st = []; //For stack operations, we are using C++ built in stack
        let result = "";
  
        for(let i = 0; i < s.length; i++) {
            let c = s[i];
  
            // If the scanned character is
            // an operand, add it to output string.
            if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
                result += c;
  
            // If the scanned character is an
            // ‘(‘, push it to the stack.
            else if(c == '(')
                st.push('(');
  
            // If the scanned character is an ‘)’,
            // pop and to output string from the stack
            // until an ‘(‘ is encountered.
            else if(c == ')') {
                while(st[st.length - 1] != '(')
                {
                    result += st[st.length - 1];
                    st.pop();
                }
                st.pop();
            }
  
            //If an operator is scanned
            else {
                while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                    result += st[st.length - 1];
                    st.pop(); 
                }
                st.push(c);
            }
        }
  
        // Pop all the remaining elements from the stack
        while(st.length != 0) {
            result += st[st.length - 1];
            st.pop();
        }
        txt2.innerHTML = `Infix to Postfix: ${result}`;
        
    }



    function isOperatorr(c)
{
    return (!(c >= 'a' && c <= 'z') &&
            !(c >= '0' && c <= '9') &&
            !(c >= 'A' && c <= 'Z'));
}
 
// Function to find priority
// of given operator.
function getPriority(C)
{
    if (C == '-' || C == '+')
        return 1;
    else if (C == '*' || C == '/')
        return 2;
    else if (C == '^')
        return 3;
    return 0;
}
 
// Function that converts infix
// expression to prefix expression.
function infixToPrefix(infix)
{
    // stack for operators.
    let operators = [];
  
    // stack for operands.
    let operands = [];
  
    for (let i = 0; i < infix.length; i++)
    {
  
        // If current character is an
        // opening bracket, then
        // push into the operators stack.
        if (infix[i] == '(')
        {
            operators.push(infix[i]);
        }
  
        // If current character is a
        // closing bracket, then pop from
        // both stacks and push result
        // in operands stack until
        // matching opening bracket is
        // not found.
        else if (infix[i] == ')')
        {
            while (operators.length!=0 &&
                operators[operators.length-1] != '(')
                {
  
                // operand 1
                let op1 = operands.pop();
                 
  
                // operand 2
                let op2 = operands.pop();
                 
  
                // operator
                let op = operators.pop();
                 
  
                // Add operands and operator
                // in form operator +
                // operand1 + operand2.
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
  
            // Pop opening bracket
            // from stack.
            operators.pop();
        }
  
        // If current character is an
        // operand then push it into
        // operands stack.
        else if (!isOperatorr(infix[i]))
        {
            operands.push(infix[i] + "");
        }
  
        // If current character is an
        // operator, then push it into
        // operators stack after popping
        // high priority operators from
        // operators stack and pushing
        // result in operands stack.
        else
        {
            while (operators.length &&
                getPriority(infix[i]) <=
                    getPriority(operators[operators.length-1]))
                {
  
                let op1 = operands.pop();
                 
  
                let op2 = operands.pop();
                 
  
                let op = operators.pop();
                 
  
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
  
            operators.push(infix[i]);
        }
    }
  
    // Pop operators from operators
    // stack until it is empty and
    // operation in add result of
    // each pop operands stack.
    while (operators.length!=0)
    {
        let op1 = operands.pop();
         
  
        let op2 = operands.pop();
         
  
        let op = operators.pop();
         
  
        let tmp = op + op2 + op1;
        operands.push(tmp);
    }
  
    // Final prefix expression is
    // present in operands stack.
    let answer =  operands[operands.length-1];
    txt1.innerHTML = `Infix to Postfix: ${answer}`;

}
