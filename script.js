// ============================================
// Selenium Testing Website - JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if initializeAllSections exists (for index page)
    if (typeof initializeAllSections === 'function') {
        initializeAllSections();
    }
    // Individual section pages will call their specific init functions directly
});

// Initialize all sections
function initializeAllSections() {
    initializeInputSection();
    initializeButtonSection();
    initializeSelectSection();
    initializeAlertSection();
    initializeFrameSection();
    initializeRadioSection();
    initializeWindowSection();
    initializeDragDropSection();
    initializeSortSection();
    initializeWaitsSection();
    initializeWebtableSection();
    initializeJavaScriptSection();
    initializeMousehoverSection();
    initializeRobotClassSection();
    initializeActionsClassSection();
    initializeLinktextSection();
}

// ============================================
// 1. Input Section
// ============================================
function initializeInputSection() {
    const resultDiv = document.getElementById('input-result');
    
    // Full Name input
    const fullNameInput = document.getElementById('fullName');
    if (fullNameInput) {
        fullNameInput.addEventListener('input', function() {
            resultDiv.textContent = `Full Name: ${this.value}`;
            console.log(`Full Name input: ${this.value}`);
        });
    }
    
    // Append text input - already has "I am good", user can append more
    const appendTextInput = document.getElementById('appendText');
    if (appendTextInput) {
        appendTextInput.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                console.log('Tab pressed on append text field');
            }
        });
        appendTextInput.addEventListener('input', function() {
            console.log(`Append text value: ${this.value}`);
        });
    }
    
    // Get text input - readonly field with "Students"
    const getTextInput = document.getElementById('getText');
    if (getTextInput) {
        console.log(`Get text value: ${getTextInput.value}`);
    }
    
    // Clear text input - starts with "yuvaraj Selenium practice"
    const clearTextInput = document.getElementById('clearText');
    if (clearTextInput) {
        clearTextInput.addEventListener('input', function() {
            if (this.value === '') {
                resultDiv.textContent = 'Text cleared successfully';
                console.log('Text cleared');
            } else {
                console.log(`Clear text value: ${this.value}`);
            }
        });
    }
    
    // Disabled input - just for verification
    const disabledInput = document.getElementById('disabledInput');
    if (disabledInput) {
        console.log(`Disabled input value: ${disabledInput.value}, disabled: ${disabledInput.disabled}`);
    }
}

// ============================================
// 2. Button Section
// ============================================
function initializeButtonSection() {
    const resultDiv = document.getElementById('button-result');
    
    // Goto Home button
    const homeBtn = document.getElementById('btn-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Color button
    const colorBtn = document.getElementById('color');
    if (colorBtn) {
        colorBtn.addEventListener('click', function() {
            const bgColor = window.getComputedStyle(this).backgroundColor;
            resultDiv.textContent = `Button color: ${bgColor}`;
            console.log(`Button color: ${bgColor}`);
        });
    }
    
    // Disabled button
    const isDisabledBtn = document.getElementById('isDisabled');
    if (isDisabledBtn) {
        console.log(`Button disabled: ${isDisabledBtn.disabled}`);
    }
    
    // Long press button
    const longpressBtn = document.getElementById('longpress');
    if (longpressBtn) {
        let pressTimer;
        longpressBtn.addEventListener('mousedown', function() {
            pressTimer = setTimeout(() => {
                resultDiv.textContent = 'Button held for 1 second!';
                console.log('Button long pressed');
            }, 1000);
        });
        longpressBtn.addEventListener('mouseup', function() {
            clearTimeout(pressTimer);
        });
        longpressBtn.addEventListener('mouseleave', function() {
            clearTimeout(pressTimer);
        });
    }
}

// ============================================
// 3. Select Section
// ============================================
function initializeSelectSection() {
    const resultDiv = document.getElementById('select-result');
    
    // Fruits select
    const fruitsSelect = document.getElementById('fruits');
    if (fruitsSelect) {
        fruitsSelect.addEventListener('change', function() {
            resultDiv.textContent = `Selected fruit: ${this.value}`;
            console.log(`Fruits select: ${this.value}`);
        });
    }
    
    // Superheros select
    const superherosSelect = document.getElementById('superheros');
    if (superherosSelect) {
        superherosSelect.addEventListener('change', function() {
            resultDiv.textContent = `Selected superhero: ${this.value}`;
            console.log(`Superheros select: ${this.value}`);
        });
    }
    
    // Language select
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            resultDiv.textContent = `Selected language: ${this.value}`;
            console.log(`Language select: ${this.value}`);
        });
    }
    
    // Country select
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            resultDiv.textContent = `Selected country: ${this.value}`;
            console.log(`Country select: ${this.value}`);
        });
    }
}

// ============================================
// 4. Alert Section
// ============================================
function initializeAlertSection() {
    const resultDiv = document.getElementById('alert-result');
    
    // Simple alert
    const acceptBtn = document.getElementById('accept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            alert('Hey! Welcome to LetCode');
            resultDiv.textContent = 'Simple alert shown';
            console.log('Simple alert shown');
        });
    }
    
    // Confirm alert
    const confirmBtn = document.getElementById('confirm');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const result = confirm('Are you happy with LetCode?');
            resultDiv.textContent = `Confirm result: ${result ? 'OK' : 'Cancel'}`;
            console.log(`Confirm result: ${result}`);
        });
    }
    
    // Prompt alert
    const promptBtn = document.getElementById('prompt');
    if (promptBtn) {
        promptBtn.addEventListener('click', function() {
            const result = prompt('Enter your name');
            if (result !== null) {
                resultDiv.textContent = `Prompt result: ${result}`;
                console.log(`Prompt result: ${result}`);
            } else {
                resultDiv.textContent = 'Prompt cancelled';
                console.log('Prompt cancelled');
            }
        });
    }
    
    // Modern alert
    const modernBtn = document.getElementById('modern');
    if (modernBtn) {
        modernBtn.addEventListener('click', function() {
            alert('Modern Alert - This is a sweet alert');
            resultDiv.textContent = 'Modern alert shown';
            console.log('Modern alert shown');
        });
    }
}

// ============================================
// 5. Frame Section
// ============================================
function initializeFrameSection() {
    const resultDiv = document.getElementById('frame-result');
    
    // First iframe
    const firstFr = document.getElementById('firstFr');
    if (firstFr) {
        const iframeContent1 = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial; padding: 20px; background: #f0f0f0; }
                    h2 { color: #667eea; }
                    input { padding: 10px; width: 200px; border: 2px solid #ddd; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h2>First Frame</h2>
                <p>Enter your first name:</p>
                <input type="text" id="firstname" name="firstname" placeholder="First Name">
            </body>
            </html>
        `;
        
        firstFr.onload = function() {
            try {
                const iframeDoc = firstFr.contentDocument || firstFr.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(iframeContent1);
                iframeDoc.close();
                resultDiv.textContent = 'First iframe loaded';
            } catch (e) {
                console.log('Iframe access restricted:', e);
            }
        };
        firstFr.src = 'about:blank';
    }
    
    // Second iframe
    const secondFr = document.getElementById('secondFr');
    if (secondFr) {
        const iframeContent2 = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial; padding: 20px; background: #f0f0f0; }
                    h2 { color: #667eea; }
                    input { padding: 10px; width: 200px; border: 2px solid #ddd; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h2>Second Frame</h2>
                <p>Enter your last name:</p>
                <input type="text" id="lastname" name="lastname" placeholder="Last Name">
            </body>
            </html>
        `;
        
        secondFr.onload = function() {
            try {
                const iframeDoc = secondFr.contentDocument || secondFr.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(iframeContent2);
                iframeDoc.close();
                resultDiv.textContent = 'Second iframe loaded';
            } catch (e) {
                console.log('Iframe access restricted:', e);
            }
        };
        secondFr.src = 'about:blank';
    }
    
    // Third iframe
    const thirdFr = document.getElementById('thirdFr');
    if (thirdFr) {
        const iframeContent3 = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial; padding: 20px; background: #f0f0f0; }
                    h2 { color: #667eea; }
                    button { padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
                </style>
            </head>
            <body>
                <h2>Third Frame</h2>
                <p>Click the button:</p>
                <button id="frameButton">Click Me</button>
            </body>
            </html>
        `;
        
        thirdFr.onload = function() {
            try {
                const iframeDoc = thirdFr.contentDocument || thirdFr.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(iframeContent3);
                iframeDoc.close();
                resultDiv.textContent = 'Third iframe loaded';
            } catch (e) {
                console.log('Iframe access restricted:', e);
            }
        };
        thirdFr.src = 'about:blank';
    }
}

// ============================================
// 6. Radio Section
// ============================================
function initializeRadioSection() {
    const resultDiv = document.getElementById('radio-result');
    
    // Radio buttons for foo
    const radios = document.querySelectorAll('input[name="foo"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            resultDiv.textContent = `Selected: ${this.value}`;
            console.log(`Radio selected: ${this.value}`);
        });
    });
    
    // Radio buttons for bar (find which is selected)
    const barRadios = document.querySelectorAll('input[name="bar"]');
    barRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            resultDiv.textContent = `Selected: ${this.value}`;
            console.log(`Bar radio selected: ${this.value}`);
        });
    });
    
    // Checkboxes
    const javaCheckbox = document.getElementById('java');
    if (javaCheckbox) {
        javaCheckbox.addEventListener('change', function() {
            resultDiv.textContent = `Checkbox ${this.checked ? 'checked' : 'unchecked'}`;
            console.log(`Java checkbox: ${this.checked}`);
        });
    }
    
    const kotlinCheckbox = document.getElementById('kotlin');
    if (kotlinCheckbox) {
        kotlinCheckbox.addEventListener('change', function() {
            resultDiv.textContent = `Checkbox ${this.checked ? 'checked' : 'unchecked'}`;
            console.log(`Kotlin checkbox: ${this.checked}`);
        });
    }
}

// ============================================
// 7. Window Section
// ============================================
function initializeWindowSection() {
    const resultDiv = document.getElementById('window-result');
    let openedWindows = [];
    
    // Home button - opens index.html in new window
    const homeBtn = document.getElementById('win-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            const newWindow = window.open('index.html', 'homeWindow', 'width=800,height=600');
            if (newWindow) {
                openedWindows.push(newWindow);
                resultDiv.textContent = 'Home page opened in new window';
                console.log('Home window opened');
            }
        });
    }
    
    // Multiple windows button
    const multiBtn = document.getElementById('multi');
    if (multiBtn) {
        multiBtn.addEventListener('click', function() {
            openedWindows = [];
            // Open windows with slight delay to avoid popup blocker
            setTimeout(() => {
                const win1 = window.open('index.html', 'window1', 'width=600,height=400');
                if (win1) openedWindows.push(win1);
            }, 100);
            setTimeout(() => {
                const win2 = window.open('index.html', 'window2', 'width=600,height=400');
                if (win2) openedWindows.push(win2);
            }, 200);
            setTimeout(() => {
                const win3 = window.open('index.html', 'window3', 'width=600,height=400');
                if (win3) openedWindows.push(win3);
                resultDiv.textContent = `Opened ${openedWindows.length} windows`;
                console.log(`Opened ${openedWindows.length} windows`);
            }, 300);
        });
    }
}

// ============================================
// 8. Drag and Drop Section (Drag)
// ============================================
function initializeDragDropSection() {
    const resultDiv = document.getElementById('dragdrop-result');
    const draggableBox = document.getElementById('draggable-box');
    const dragContainer = document.querySelector('.drag-container');
    
    if (draggableBox && dragContainer) {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        
        draggableBox.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
        
        function dragStart(e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            
            if (e.target === draggableBox) {
                isDragging = true;
            }
        }
        
        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                
                xOffset = currentX;
                yOffset = currentY;
                
                // Constrain within container
                const containerRect = dragContainer.getBoundingClientRect();
                const boxRect = draggableBox.getBoundingClientRect();
                
                const maxX = containerRect.width - boxRect.width;
                const maxY = containerRect.height - boxRect.height;
                
                xOffset = Math.max(0, Math.min(xOffset, maxX));
                yOffset = Math.max(0, Math.min(yOffset, maxY));
                
                setTranslate(xOffset, yOffset, draggableBox);
            }
        }
        
        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }
        
        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
    }
}

// ============================================
// 8b. Droppable Section
// ============================================
function initializeDroppableSection() {
    const resultDiv = document.getElementById('droppable-result');
    
    const sampleBox = document.getElementById('sample-box');
    const droppable = document.getElementById('droppable');
    
    if (sampleBox && droppable) {
        sampleBox.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.id);
            this.classList.add('dragging');
        });
        
        sampleBox.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
        
        droppable.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        
        droppable.addEventListener('dragleave', function() {
            this.classList.remove('drag-over');
        });
        
        droppable.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            this.textContent = 'Dropped!';
            this.classList.add('has-item');
            resultDiv.textContent = 'Item dropped successfully';
            console.log('Item dropped');
        });
    }
}

// ============================================
// 9. Sort Section
// ============================================
function initializeSortSection() {
    const resultDiv = document.getElementById('sort-result');
    const sortableList = document.getElementById('sample-box1');
    
    if (sortableList) {
        const items = Array.from(sortableList.querySelectorAll('.sortable-item'));
        
        items.forEach(item => {
            item.addEventListener('click', function() {
                // Simple sort on click - move to end
                sortableList.appendChild(this);
                resultDiv.textContent = 'Item moved';
                console.log('Item clicked and moved');
            });
        });
    }
}

// ============================================
// 10. Waits Section
// ============================================
function initializeWaitsSection() {
    const resultDiv = document.getElementById('waits-result');
    
    // Simple alert
    const alertBtn = document.getElementById('alert');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert('Hey! Click to see what happens next?');
            resultDiv.textContent = 'Simple alert shown';
            console.log('Simple alert shown');
        });
    }
    
    // Wait alert
    const waitAlertBtn = document.getElementById('waitalert');
    if (waitAlertBtn) {
        waitAlertBtn.addEventListener('click', function() {
            setTimeout(() => {
                alert('Alert appeared after 2 seconds!');
                resultDiv.textContent = 'Wait alert shown after delay';
                console.log('Wait alert shown');
            }, 2000);
        });
    }
    
    // Change text button
    const changeBtn = document.getElementById('wait-change');
    const textChange = document.getElementById('wait-textchange');
    if (changeBtn && textChange) {
        changeBtn.addEventListener('click', function() {
            setTimeout(() => {
                textChange.textContent = 'Selenium';
                resultDiv.textContent = 'Text changed to Selenium';
                console.log('Text changed');
            }, 3000);
        });
    }
    
    // Display button
    const displayBtn = document.getElementById('display');
    if (displayBtn) {
        setTimeout(() => {
            displayBtn.style.display = 'inline-block';
            resultDiv.textContent = 'Button displayed after 5 seconds';
            console.log('Button displayed');
        }, 5000);
    }
    
    // Enable button
    const enableBtn = document.getElementById('enable');
    if (enableBtn) {
        setTimeout(() => {
            enableBtn.disabled = false;
            enableBtn.textContent = 'Button is Enabled';
            resultDiv.textContent = 'Button enabled after 5 seconds';
            console.log('Button enabled');
        }, 5000);
    }
}

// ============================================
// 11. Webtable Section
// ============================================
function initializeWebtableSection() {
    const resultDiv = document.getElementById('webtable-result');
    
    // Shopping table - calculate total
    const shoppingTable = document.getElementById('shopping-table');
    if (shoppingTable) {
        const rows = shoppingTable.querySelectorAll('tbody tr:not(.total-row)');
        let total = 0;
        rows.forEach(row => {
            const priceCell = row.querySelector('td:last-child');
            if (priceCell) {
                total += parseInt(priceCell.textContent) || 0;
            }
        });
        console.log(`Shopping total: ${total}`);
    }
    
    // Attendance table - Mark Raj as present (for Selenium to interact)
    const attendanceTable = document.getElementById('attendance-table');
    if (attendanceTable) {
        const rows = attendanceTable.querySelectorAll('tbody tr');
        rows.forEach((row) => {
            row.addEventListener('click', function() {
                const cells = this.querySelectorAll('td');
                const rowData = Array.from(cells).map(cell => cell.textContent).join(' | ');
                resultDiv.textContent = `Row clicked: ${rowData}`;
                console.log(`Row clicked: ${rowData}`);
            });
        });
    }
    
    // Sortable table
    const sortableTable = document.getElementById('sortable-table');
    if (sortableTable) {
        const headers = sortableTable.querySelectorAll('.sortable-header');
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                sortTable(sortableTable, index);
                resultDiv.textContent = `Table sorted by column ${index + 1}`;
                console.log(`Table sorted by column ${index + 1}`);
            });
        });
    }
}

function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumeric = !isNaN(parseFloat(rows[0].cells[columnIndex].textContent));
    
    rows.sort((a, b) => {
        const aVal = a.cells[columnIndex].textContent.trim();
        const bVal = b.cells[columnIndex].textContent.trim();
        
        if (isNumeric) {
            return parseFloat(aVal) - parseFloat(bVal);
        } else {
            return aVal.localeCompare(bVal);
        }
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

// ============================================
// 12. JavaScript Section
// ============================================
function initializeJavaScriptSection() {
    const resultDiv = document.getElementById('javascript-result');
    let elementCounter = 0;
    
    // Add element
    const addBtn = document.getElementById('js-add');
    const elementsDiv = document.getElementById('js-elements');
    if (addBtn && elementsDiv) {
        addBtn.addEventListener('click', function() {
            elementCounter++;
            const newElement = document.createElement('div');
            newElement.className = 'js-element';
            newElement.textContent = `Element ${elementCounter}`;
            elementsDiv.appendChild(newElement);
            resultDiv.textContent = `Element ${elementCounter} added`;
            console.log(`Element ${elementCounter} added`);
        });
    }
    
    // Remove element
    const removeBtn = document.getElementById('js-remove');
    const elements2Div = document.getElementById('js-elements2');
    if (removeBtn && elements2Div) {
        removeBtn.addEventListener('click', function() {
            const lastElement = elements2Div.querySelector('.js-element:last-child');
            if (lastElement) {
                lastElement.remove();
                resultDiv.textContent = 'Last element removed';
                console.log('Element removed');
            } else {
                resultDiv.textContent = 'No elements to remove';
            }
        });
    }
    
    // Change text
    const changeBtn = document.getElementById('js-change');
    const textChange = document.getElementById('js-textchange');
    if (changeBtn && textChange) {
        changeBtn.addEventListener('click', function() {
            textChange.textContent = 'Text changed successfully!';
            resultDiv.textContent = 'Text changed';
            console.log('Text changed');
        });
    }
}

// ============================================
// 13. Mousehover Section
// ============================================
function initializeMousehoverSection() {
    const resultDiv = document.getElementById('mousehover-result');
    
    // Hover element
    const hoverElement = document.getElementById('hover');
    if (hoverElement) {
        hoverElement.addEventListener('mouseenter', function() {
            const tooltip = document.getElementById('tooltip-1');
            if (tooltip) {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
            resultDiv.textContent = 'Hovered over element';
            console.log('Hovered over element');
        });
        
        hoverElement.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip-1');
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }
        });
    }
    
    // Hover button
    const hover2Btn = document.getElementById('hover2');
    const tooltip2 = document.getElementById('tooltip-2');
    if (hover2Btn && tooltip2) {
        hover2Btn.addEventListener('mouseenter', function() {
            tooltip2.style.display = 'block';
            resultDiv.textContent = 'Hovered over button';
            console.log('Hovered over button');
        });
        
        hover2Btn.addEventListener('mouseleave', function() {
            tooltip2.style.display = 'none';
        });
    }
}

// ============================================
// 14. RobotClass Section
// ============================================
function initializeRobotClassSection() {
    const resultDiv = document.getElementById('robotclass-result');
    
    // Right click box
    const rightClickBox = document.getElementById('right-click-me');
    const contextMenu = document.getElementById('context-menu');
    const robotExercise = rightClickBox ? rightClickBox.closest('.robot-exercise') : null;
    
    if (rightClickBox && contextMenu && robotExercise) {
        rightClickBox.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const rect = rightClickBox.getBoundingClientRect();
            contextMenu.style.display = 'block';
            contextMenu.style.position = 'absolute';
            contextMenu.style.left = (rect.right + 10) + 'px';
            contextMenu.style.top = rect.top + 'px';
            resultDiv.textContent = 'Right click detected';
            console.log('Right click detected');
        });
        
        // Close context menu when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!contextMenu.contains(e.target) && e.target !== rightClickBox) {
                contextMenu.style.display = 'none';
            }
        });
        
        // Context menu items
        const menuItems = contextMenu.querySelectorAll('.context-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                resultDiv.textContent = `Context menu: ${this.textContent} selected`;
                console.log(`Context menu: ${this.textContent}`);
                contextMenu.style.display = 'none';
            });
        });
    }
    
    // Double click button
    const doubleClickBtn = document.getElementById('double-click-me');
    if (doubleClickBtn) {
        let clickCount = 0;
        let clickTimer;
        
        doubleClickBtn.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 300);
            } else if (clickCount === 2) {
                clearTimeout(clickTimer);
                clickCount = 0;
                alert('You have double clicked!');
                resultDiv.textContent = 'Double click detected - Alert shown';
                console.log('Double click detected');
            }
        });
    }
}

// ============================================
// 15. ActionsClass Section
// ============================================
function initializeActionsClassSection() {
    const resultDiv = document.getElementById('actionsclass-result');
    
    // Double click
    const doubleClickBtn = document.getElementById('doubleClick');
    const doubleClickResult = document.getElementById('doubleClickResult');
    if (doubleClickBtn && doubleClickResult) {
        let clickCount = 0;
        let clickTimer;
        
        doubleClickBtn.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 300);
            } else if (clickCount === 2) {
                clearTimeout(clickTimer);
                clickCount = 0;
                doubleClickResult.textContent = 'You have double clicked';
                resultDiv.textContent = 'Double click detected';
                console.log('Double click detected');
            }
        });
    }
    
    // Right click
    const rightClickBtn = document.getElementById('rightClick');
    const rightClickResult = document.getElementById('rightClickResult');
    if (rightClickBtn && rightClickResult) {
        rightClickBtn.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            rightClickResult.textContent = 'You have right clicked';
            resultDiv.textContent = 'Right click detected';
            console.log('Right click detected');
        });
    }
    
    // Hold button
    const holdBtn = document.getElementById('hold');
    const holdResult = document.getElementById('holdResult');
    if (holdBtn && holdResult) {
        let holdTimer;
        
        holdBtn.addEventListener('mousedown', function() {
            holdTimer = setTimeout(() => {
                holdResult.textContent = 'Button held for 1 second!';
                resultDiv.textContent = 'Button held';
                console.log('Button held');
            }, 1000);
        });
        
        holdBtn.addEventListener('mouseup', function() {
            clearTimeout(holdTimer);
        });
        
        holdBtn.addEventListener('mouseleave', function() {
            clearTimeout(holdTimer);
        });
    }
}

// ============================================
// 16. Linktext Section
// ============================================
function initializeLinktextSection() {
    const resultDiv = document.getElementById('linktext-result');
    
    // Home link - allow navigation
    const homeLink = document.getElementById('link-home');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            // Allow default navigation to index.html
            resultDiv.textContent = 'Navigating to home page...';
            console.log('Home link clicked - navigating');
        });
    }
    
    // Button link - allow navigation but log URL
    const buttonLink = document.getElementById('link-button');
    if (buttonLink) {
        buttonLink.addEventListener('click', function(e) {
            resultDiv.textContent = `Button link URL: ${this.href}`;
            console.log(`Button link URL: ${this.href}`);
            // Allow default navigation
        });
    }
    
    // Broken link - navigate to 404 page
    const brokenLink = document.getElementById('link-broken');
    if (brokenLink) {
        brokenLink.addEventListener('click', function(e) {
            // Allow default navigation to 404.html
            resultDiv.textContent = 'Broken link clicked - navigating to 404 page';
            console.log('Broken link clicked');
        });
    }
    
    // Image link - allow navigation
    const imageLink = document.getElementById('link-imageLink');
    if (imageLink) {
        imageLink.addEventListener('click', function(e) {
            // Allow default navigation to index.html
            resultDiv.textContent = 'Image link clicked - navigating to home';
            console.log('Image link clicked');
        });
    }
}

// ============================================
// Utility Functions
// ============================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Selenium Testing Website initialized successfully!');
