import Note from "./Note";
import { useStore } from "../store/useStore";

{
  /*
  TODO Substitute hardcoded data. Use the note data submitted via the form.
  */
}

const List = () => {
  const { todo } = useStore();

  return (
    <div>
      <div className='pb-5 border-b border-gray-200'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Saved Notes
        </h3>
      </div>
      <ul className='divide-y divide-gray-200'>
        {todo.map((item) => (
          <>
            <li className='py-4'>
              <Note
                title={item.title}
                body={item.body}
                id={item.id}
                done={item.done}
              />
            </li>
          </>
        ))}
        {/*  */}
      </ul>
    </div>
  );
};

export default List;
