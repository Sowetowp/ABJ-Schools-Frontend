import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/exam-test-checklist-online-learning-education-online-document-svgrepo-com.svg"
import "../Styles/Shome.css"
import "../Styles/Passignment.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { post_assignment, post_ca } from '../Redux/Actions/TeacherAction'
import { get_all_session } from '../Redux/Actions/CalendarAction'

const PostCa = () => {
  const [deadline, setDeadline] = useState("");
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState("");
  const [classes, setClasses] = useState([]);
  const [questions, setQuestions] = useState([])

  const dispatch = useDispatch()
  const teacherAuth = useSelector((state) => state.teacherAuth)
  const { teacherDetail } = teacherAuth

  useEffect(() => {
    dispatch(get_all_session())
  }, [dispatch])
  
  const getAllSession = useSelector((state) => state.getAllSession)
  const { allsession } = getAllSession

  const handleSelectChangec = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setClasses((prevSelectedValues) => [...prevSelectedValues, value]);
    } else {
      setClasses((prevSelectedValues) =>
        prevSelectedValues.filter((item) => item !== value)
      );
    }
  };


  const submitHandler = (e) => {
    e.preventDefault()
    if(allsession && allsession.term.length > 0){
      const tea = {
        title,
        classes,
        deadline,
        subject,
        term: allsession.term[allsession.term.length - 1]._id,
        questions,
        created_by: teacherDetail.id
      }
      dispatch(post_ca(tea))
    }
  }

  const [numberOfForms, setNumberOfForms] = useState([1]);
  const [counter, setCounter] = useState(1);

  const formSetter = () => {
    const curr = counter + 1;
    setCounter(curr);
    setNumberOfForms(prevForms => [...prevForms, curr]);
  };

  const qtexter = (id, qt) => {
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      existingQuestion.questionText = qt;
    } else {
      const newQuestion = {
        id: id,
        questionText: qt
      };
      setQuestions(prevForms => [...prevForms, newQuestion]);
    }
  };

  const optiontext1 = (id, qt, id2) => {
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      if (existingQuestion.options) {
        const existingQuestionoptions = existingQuestion.options.find(question => question.id === id2);
        if (existingQuestionoptions) {
          existingQuestionoptions.optionText = qt;
        } else {
          const newOption = {
            id: id2,
            optionText: qt
          };
          existingQuestion.options.push(newOption)
        }
      } else {
        const newOption = {
          id: id2,
          optionText: qt
        };
        existingQuestion.options = [newOption]
      }
    } else {
      const newOption = {
        id: id2,
        optionText: qt
      };
      const newQuestion = {
        id: id,
        options: [newOption]
      };
      setQuestions(prevForms => [...prevForms, newQuestion]);
    }
    
  };

  const radiosela = (id, qt, id2, h) => {
    if (h) {
      radioselb(id, false, "b")
      radioselc(id, false, "c")
      radioseld(id, false, "d")
    }
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      if (existingQuestion.options) {
        const existingQuestionoptions = existingQuestion.options.find(question => question.id === id2);
        if (existingQuestionoptions) {
          existingQuestionoptions.isCorrect = qt;
        } else {
          const newOption = {
            id: id2,
            isCorrect: qt
          };
          existingQuestion.options.push(newOption)
        }
      } else {
        const newOption = {
          id: id2,
          isCorrect: qt
        };
        existingQuestion.options = [newOption]
      }
    } else {
      const newOption = {
        id: id2,
        isCorrect: qt
      };
      const newQuestion = {
        id: id,
        options: [newOption]
      };
      if (h) {
        setQuestions(prevForms => [...prevForms, newQuestion]);
      }
    }
    
  };

  const radioselb = (id, qt, id2, h) => {
    if (h) {
      radiosela(id, false, "a")
      radioselc(id, false, "c")
      radioseld(id, false, "d")
    }
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      if (existingQuestion.options) {
        const existingQuestionoptions = existingQuestion.options.find(question => question.id === id2);
        if (existingQuestionoptions) {
          existingQuestionoptions.isCorrect = qt;
        } else {
          const newOption = {
            id: id2,
            isCorrect: qt
          };
          existingQuestion.options.push(newOption)
        }
      } else {
        const newOption = {
          id: id2,
          isCorrect: qt
        };
        existingQuestion.options = [newOption]
      }
    } else {
      const newOption = {
        id: id2,
        isCorrect: qt
      };
      const newQuestion = {
        id: id,
        options: [newOption]
      };
      if (h) {
        setQuestions(prevForms => [...prevForms, newQuestion]);
      }
    }
    
  };

  const radioselc = (id, qt, id2, h) => {
    if (h) {
      radiosela(id, false, "a")
      radioselb(id, false, "b")
      radioseld(id, false, "d")
    }
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      if (existingQuestion.options) {
        const existingQuestionoptions = existingQuestion.options.find(question => question.id === id2);
        if (existingQuestionoptions) {
          existingQuestionoptions.isCorrect = qt;
        } else {
          const newOption = {
            id: id2,
            isCorrect: qt
          };
          existingQuestion.options.push(newOption)
        }
      } else {
        const newOption = {
          id: id2,
          isCorrect: qt
        };
        existingQuestion.options = [newOption]
      }
    } else {
      const newOption = {
        id: id2,
        isCorrect: qt
      };
      const newQuestion = {
        id: id,
        options: [newOption]
      };
      if (h) {
        setQuestions(prevForms => [...prevForms, newQuestion]);
      }
    }
    
  };

  const radioseld = (id, qt, id2, h) => {
    if (h) {
      radiosela(id, false, "a")
      radioselc(id, false, "c")
      radioselb(id, false, "b")
    }
    const existingQuestion = questions.find(question => question.id === id);
    if (existingQuestion) {
      if (existingQuestion.options) {
        const existingQuestionoptions = existingQuestion.options.find(question => question.id === id2);
        if (existingQuestionoptions) {
          existingQuestionoptions.isCorrect = qt;
        } else {
          const newOption = {
            id: id2,
            isCorrect: qt
          };
          existingQuestion.options.push(newOption)
        }
      } else {
        const newOption = {
          id: id2,
          isCorrect: qt
        };
        existingQuestion.options = [newOption]
      }
    } else {
      const newOption = {
        id: id2,
        isCorrect: qt
      };
      const newQuestion = {
        id: id,
        options: [newOption]
      };
      if (h) {
        setQuestions(prevForms => [...prevForms, newQuestion]);
      }
    }
    
  };
  return (
    <>
      <main className='container-fluid shomain'>
        <p className='shopsash2 mb-0'>Continuous Assessment</p>
        <p className='swafundpayacc mt-2 mb-0'>Continuous Assessment / Post CA</p>
        <div className='row'>
          <div className='col-md-12 mt-3'>
            <div className='swalfunbs'>
              <div className='d-flex swalfunaic'>
                <div className='swalfunsbbs'></div>
                <p className='mb-0 ms-2 swalfunp1'>Post CA</p>
              </div>
              <div className='p-3'>
                <fieldset className='border swalfunfs px-3 pb-3'>
                  <legend className='border swalfunlegend ms-4'><img src={bank} style={{width:"45px"}}/></legend>
                  <form onSubmit={submitHandler} className='ateafo2'>
                    <h3 className='mt-5 '>Continuous Assessment Details</h3>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p className='swalfunp2 mt-3'>Title:</p>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='swalfunselact form-control form-select-sm' />
                      </div>
                      <div className='col-md-6'>
                        <p className='swalfunp2 mt-3'>Deadline:</p>
                        <input type='date' value={deadline} onChange={(e) => setDeadline(e.target.value)} className='swalfunselact form-control form-select-sm' />
                      </div>
                      <div className='col-md-6'>
                        <p className='swalfunp2 mt-3'>Classes:</p>
                        {teacherDetail && teacherDetail.access.map(sub =>
                          <>
                            <label className='' style={{ fontWeight: "lighter", fontSize: "12px" }}>
                              <input onChange={handleSelectChangec} value={sub._id} className='' type='checkbox' /> {sub.name}
                            </label>
                            <br />
                          </>
                        )}
                      </div>
                      <div className='col-md-6'>
                        <p className='swalfunp2 mt-3'>Subject:</p>
                        {teacherDetail && teacherDetail.subject.map(sub =>
                          <div className="form-check passoptions">
                            <input onChange={(e) => setSubject(e.target.value)} type="radio" className="form-check-input" id={`d+${sub._id}`} name="subjectradio" value={sub._id} />{sub.name}
                            <label className="form-check-label" for={`d+${sub._id}`}></label>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className='mt-5 mb-0'>Questions</h3>
                    <div className='row'>
                      {numberOfForms.map((dd) =>
                        <div className='col-md-12'>
                          <h3 className='mt-5' style={{ fontSize: "12px" }}>Question {dd}</h3>
                          <textarea className='swalfunselact form-control form-select-sm' onChange={(e) => qtexter(dd, e.target.value)} />
                          <div className='row'>
                            <div className='col-md-3'>
                              <h3 className='mt-2' style={{ fontSize: "12px" }}>Option a</h3>
                              <input className='swalfunselact form-control form-select-sm mt-2' onChange={(e) => optiontext1(dd, e.target.value, "a")} />
                              <div className="form-check passoptions mt-2">
                                <input type="radio" className="form-check-input" id={"opt" + dd} name={"ansradio" + dd} value="" onChange={(e) => radiosela(dd, true, "a", "h")} />Answer
                                <label className="form-check-label" for={"opt" + dd}></label>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <h3 className='mt-2' style={{ fontSize: "12px" }}>Option b</h3>
                              <input className='swalfunselact form-control form-select-sm mt-2' onChange={(e) => optiontext1(dd, e.target.value, "b")} />
                              <div className="form-check passoptions mt-2">
                                <input type="radio" className="form-check-input" id={"opt" + dd} name={"ansradio" + dd} value="" onChange={(e) => radioselb(dd, true, "b", "h")} />Answer
                                <label className="form-check-label" for={"opt" + dd}></label>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <h3 className='mt-2' style={{ fontSize: "12px" }}>Option c</h3>
                              <input className='swalfunselact form-control form-select-sm mt-2' onChange={(e) => optiontext1(dd, e.target.value, "c")} />
                              <div className="form-check passoptions mt-2">
                                <input type="radio" className="form-check-input" id={"opt" + dd} name={"ansradio" + dd} value="" onChange={(e) => radioselc(dd, true, "c", "h")} />Answer
                                <label className="form-check-label" for={"opt" + dd}></label>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <h3 className='mt-2' style={{ fontSize: "10px" }}>Option d</h3>
                              <input className='swalfunselact form-control form-select-sm mt-2' onChange={(e) => optiontext1(dd, e.target.value, "d")} />
                              <div className="form-check passoptions mt-2">
                                <input type="radio" className="form-check-input" id={"opt" + dd} name={"ansradio" + dd} value="" onChange={(e) => radioseld(dd, true, "d", "h")} />Answer
                                <label className="form-check-label" for={"opt" + dd}></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <br />
                    <a onClick={(e) => formSetter()} className='p-2' style={{ color: "rgb(15, 79, 163)", textDecoration: "none", border: "solid 1px rgb(15, 79, 163)", borderRadius: "10px", fontSize: "12px", cursor: 'pointer' }}>Add question +</a>
                    <br />
                    <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostCa