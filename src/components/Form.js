import { Form, Field, FormSpy } from 'react-final-form'
import createDecorator from 'final-form-focus'

import { showResults, required } from '../utils'
import RenderCount from './renderCounter'

const handleModal = (e) => {
    e.stopPropagation()
}

const ModalForm = ({ closeModal, eventClose, edit, date, event }) => {
    const focusOnError = createDecorator()
    return (<>
        {
            <Form
                onSubmit={showResults}
                subscription={{ submitting: true }}
                decorators={[focusOnError]}>
                {({ handleSubmit, form, submitting }) =>
                    <form
                        className='modal'
                        onClick={closeModal}
                        onSubmit={(e) => {
                            const submit = handleSubmit(e)
                            edit && !submit && closeModal()
                            edit && submit && eventClose(e)
                        }}>
                        <div
                            className="modal__main"
                            onClick={handleModal}>
                            <RenderCount />
                            <Field
                                name='title'
                                defaultValue={edit ? event.title : ''}
                                placeholder={edit ? '' : 'event title'}
                                validate={required} >
                                {({ input, meta, placeholder }) =>
                                    <label className={meta.error && meta.touched ? 'required-title' : ''}>
                                        <RenderCount />
                                        {
                                            meta.error && meta.touched ?
                                                <span>Title is required</span> :
                                                <span>Title:</span>
                                        }
                                        <input className={meta.error && meta.touched ? 'required-input' : ''} {...input}
                                            type='text'
                                            placeholder={placeholder} />
                                    </label>}
                            </Field>
                            <Field
                                name='date'
                                defaultValue={!edit ?
                                    `${date.year}-${date.month < 9 ? `0${date.month + 1}` :
                                        date.month + 1}-${date.day < 10 ? `0${date.day}` : date.day}` :
                                    event.date
                                }
                                validate={required} >
                                {({ input, meta, placeholder }) =>
                                    <label >
                                        <RenderCount />
                                        {
                                            meta.error && meta.touched ?
                                                <span>Date is required</span> :
                                                <span>Date:</span>
                                        }
                                        <input {...input}
                                            type='date'
                                            placeholder={placeholder} />
                                    </label>}
                            </Field>
                            <Field
                                name='time'
                                defaultValue={edit ? event.time : ''}
                                validate={required} >
                                {({ input, meta, placeholder }) =>
                                    <label className={meta.error && meta.touched ? 'required-title' : ''} >
                                        <RenderCount />
                                        {
                                            meta.error && meta.touched ?
                                                <span>Time is required</span> :
                                                <span>Time:</span>
                                        }
                                        <input className={meta.error && meta.touched ? 'required-input' : ''}{...input}
                                            type='time'
                                            placeholder={placeholder} />
                                    </label>}
                            </Field>
                            <Field
                                name='duration'
                                defaultValue={edit ? event.duration : ''}>
                                {({ input }) =>
                                    <label>
                                        <RenderCount />
                                        <span>Duration, min:</span>
                                        <input {...input}
                                            type='number'
                                            min='0' />
                                    </label>}
                            </Field>
                            <Field
                                name='description'
                                placeholder='event description'
                                defaultValue={edit ? event.description : ''}
                                validate={required} >
                                {({ input, meta, placeholder }) =>
                                    <label className={meta.error && meta.touched ? 'required-title' : ''}>
                                        <RenderCount />
                                        {
                                            meta.error && meta.touched ?
                                                <span>Description is required</span> :
                                                <span>Description:</span>
                                        }
                                        <input className={meta.error && meta.touched ? 'required-input' : ''} {...input}
                                            type='text'
                                            placeholder={placeholder} />
                                    </label>}
                            </Field>
                            {edit || <button type='submit'
                                className='form__button'
                                disabled={submitting}>
                                Add new event
                            </button>}
                            {edit &&
                                <>
                                    <button
                                        type='submit'
                                        className='form__button'
                                        disabled={submitting}
                                    >
                                        Save
                                    </button>
                                    <button type='button'
                                        className='form__button'
                                        disabled={submitting}
                                        onClick={closeModal}>
                                        Cancel
                                    </button>
                                    <button type='button'
                                        className='form__button'
                                        disabled={submitting}
                                        onClick={eventClose}>
                                        Delete
                                    </button>
                                </>}
                        </div>
                        {/* <FormSpy subscription={{ values: true }}>{({ values }) =>
                            <pre>{JSON.stringify(values, undefined, 2)}</pre>}
                        </FormSpy> */}
                    </form>}
            </Form >
        }
    </>
    )
}

export default ModalForm