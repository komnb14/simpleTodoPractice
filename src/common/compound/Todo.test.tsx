import '@testing-library/jest-dom'
import Todo from "@/common/compound/Todo";
import {screen, render} from "@testing-library/react";

describe('Todo', function () {
    it("renderList", () => {
        render(
            <div>
                <Todo.List>
                    {(todo) => todo.map((data) => <button key={data.id}>{JSON.stringify(data)}</button>)}
                </Todo.List>
            </div>);
        const item = screen.getByRole('button');
        expect(item).toHaveTextContent('{"id":0,"description":"Hello","title":"타이틀"}');



    })
});
