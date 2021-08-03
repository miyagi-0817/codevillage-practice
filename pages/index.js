import { useForm, Controller } from "react-hook-form";

import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { render } from "react-dom";
import firebase from "../config/firebase";
import Room from "./Room";
import React, { useEffect } from "react";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const watchisLearning = watch("isLearning", false);
  const watchwasLearning = watch("wasLearning", false);
  function renderMoreQuestion() {
    if (watchwasLearning === "true" || watchisLearning === "true") {
      // if (watchisLearning === "true") {
      // <p>
      console.log("anono");

      // </p>;
      // spaa
      // <p></p>
    }
    // )
    // console.log(useForm());
  }

  const writeFire = async (data) => {
    console.log(data);
    const db = firebase.firestore();
    await db.collection("questionnaire").add({
      data,
    });
  };

  //

  // Add a new document in collection "cities"

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={handleSubmit(writeFire)}>
          const cityRef = db.collection('cities').doc('BJ');
          <div>
            <label htmlFor="name">
              Q1. 名前を入力してください（匿名可）。
              <label htmlFor="name">
                Q1. 名前を入力してください（匿名可）。
              </label>
              <Controller
                name="name"
                defaultValue=""
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input value={value} onChange={onChange} />
                )}
              />
            </label>
            {/* 自作ここまで */}
          </div>
          <div>
            <label htmlFor="birth">Q2. 生年を入力してください。</label>

            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
            {errors.birth && <span>このフィールドは回答必須です。</span>}
          </div>
          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value={true}
              // なぜこの書き方？
              required
            />
            <label htmlFor="isLearning1">はい</label>

            <input
              id="isLearning2"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value={false}
              //なぜこの書き方？
              required
            />
            <label htmlFor="isLearning2">いいえ</label>

            {errors.isLearning && <span>このフィールドは回答必須です。</span>}
          </div>
          <div>
            <span>
              Q4. これまでに、プログラミングを学習したことがありますか？
            </span>
            <input
              id="wasLearning1"
              {...register("wasLearning", { required: true })}
              // wasLearningという値を登録している
              name="wasLearning"
              type="radio"
              value={true}
              // required
            />
            <label htmlFor="wasLearning1">はい</label>
            <input
              id="wasLearning2"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value={false}
              // required
            />
            <label htmlFor="wasLearning2">いいえ</label>
            {errors.wasLearning && <span>このフィールドは回答必須です。</span>}

            {/* {renderMoreQuestion() && (
              <span>
                Q.
                今まで学習したことのあるプログラミング言語をすべて教えてください
              </span>
            )} */}
          </div>
          <div>
            {watchwasLearning === "true" || watchisLearning === "true" ? (
              <span>
                Q.今まで学習したことのあるプログラミング言語をすべて教えてください。
              </span>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
      {/* if(wasLearning1===true)console.log("yattane!") */}
    </>
  );
}
