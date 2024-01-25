import {fireEvent, render, screen} from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Pieda del alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Reset los mocks
    beforeEach(() => jest.clearAllMocks());

    test(('Debe de mostrar el Todo Pendiente de completar'), () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        // console.log(liElement.innerHTML);

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through')
        // screen.debug();
    });

    test(('Debe de mostrar el componente completado'), () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
        // screen.debug();
    });

    test('Span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
        
    })

    test('El boton debe de llamar el delete todo', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        // const buttonElement = screen.getByRole('button');
        const buttonElement = screen.getByLabelText('button');
        fireEvent.click(buttonElement);
        expect(buttonElement.className).toContain('btn btn-danger');
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
});