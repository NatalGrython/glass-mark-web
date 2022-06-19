import React, { FC } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Checkbox from "../../components/UI/CheckBox";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import { miningSelector } from "../../store/transaction/selector";
import { studentsSelector } from "../../store/user/selectors";
import { useCreateTransaction } from "./hooks/useCreateTransaction";
import classNames from "./index.module.scss";

interface AddBallsPageProps {}

const AddBallsPage: FC<AddBallsPageProps> = () => {
  const { students } = useSelector(studentsSelector);
  const mining = useSelector(miningSelector);
  const { handleSubmit, values, setFieldValue, handleChange } =
    useCreateTransaction(students);
  return (
    <div className={classNames["add-balls"]}>
      <div className="container">
        <div className={classNames["add-balls__content"]}>
          <div className={classNames["add-balls__inner_container"]}>
            <div className={classNames["add-balls__inner__content"]}>
              <span className={classNames.title}>Добавить баллы студенту</span>
              <div className={classNames.form}>
                <span className={classNames.title}>ФИО студента: </span>
                <Select
                  //@ts-ignore
                  value={values.receiver}
                  onChange={(event) => {
                    setFieldValue("receiver", event.target.value);
                  }}
                  //@ts-ignore
                  options={students.map((item) => ({
                    text: `${item.surname} ${item.name} ${item.patronymic}`,
                    value: item.id,
                  }))}
                />
                <span className={classNames.text}>
                  Выберите ФИО студента из списка.
                </span>
                <span className={classNames.title}>Форма контроля: </span>
                <Input
                  name="reason"
                  value={values.reason}
                  onChange={handleChange}
                  type="text"
                />
                <span className={classNames.text}>
                  Введите краткое описание формы контроля. Например: Контрольная
                  работа №1
                </span>
                <span className={classNames.title}>Количество баллов: </span>
                <Input
                  name="value"
                  value={values.value}
                  onChange={handleChange}
                  type="text"
                />
                <span className={classNames.text}>
                  Введите количество балллов. Максимальное количество баллов -
                  100.
                </span>
              </div>
              <div className={classNames.controllers__container}>
                <Checkbox
                  checked={values.hard}
                  onChange={(checked) => {
                    setFieldValue("hard", checked);
                  }}
                  title="Создать блок"
                />
                <button
                  onClick={() => handleSubmit()}
                  className={classNames.btn}
                >
                  <span>Добавить баллы</span>
                </button>
              </div>
            </div>
          </div>
          {mining && (
            <div className={classNames.mining}>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBallsPage;
