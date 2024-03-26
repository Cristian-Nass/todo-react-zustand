import { useStore } from "../store/useStore";

{
  /*
      TODO Substitute hardcoded data. Ensure the following HTML attributes:
        - data-type="note"
        - data-type="{note_title}"
        - data-body="{note_body}"
*/
}
const Note = (props) => {
  const { removeTodo, updateTodo } = useStore();

  return (
    <div
      className={[
        props.done ? "bg-gray-300 opacity-60 shadow" : "bg-gray-100 shadow",
        "overflow-hidden sm:rounded-lg",
      ]}
      data-type='note'
      data-title={props.title}
      data-body={props.body}
    >
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-base leading-6 font-medium text-gray-900'>
          Title: {props.title}
        </h3>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <dd className='mt-1 text-sm text-gray-900'>Body: {props.body}</dd>
          </div>
        </dl>
      </div>
      <div className='flex justify-evenly pb-4'>
        <div className='flex-1 text-center'>
          <input
            type='checkbox'
            onChange={() => updateTodo(props.id)}
            checked={props.done}
          />{" "}
          Done
        </div>
        <div className='flex-1 text-center'>
          <button
            class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0 px-1 border border-blue-500 hover:border-transparent rounded'
            onClick={() => removeTodo(props.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;
