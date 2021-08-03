import { useForm } from "react-hook-form";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const name = document.getElementById("name");
  //   console.log(name.value);
  // };
  // const newLocal = (
  //   <input type="checkbox" id="Don'tknow" {...register("birth")} />
  // );
  return (
    <>
      <h1>プログラミング学習に関するアンケート</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Q1. 名前を入力してください（匿名可）。</label>
          <input id="name" placeholder="宮城ゴンザレス" {...register("name")} />
        </div>
        <div>
          <label htmlFor="name">Q2. 生年月日を入力してください。</label>
          <input id="birth" placeholder="20010817" {...register("birth")} />
        </div>
        <div>
          <label htmlFor="name">
            Q3. 現在、プログラミングを学習していますか？
          </label>
          <input
            type="radio"
            id="yes"
            {...register("birth")}
            value="はい"
            required
          />
          <label for="yes">はい</label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            {...register("birth")}
            value="いいえ"
            required
          />
          <label for="yes">いいえ</label>

          {errors.isLearning && <span>このフィールドは回答必須です。</span>}
        </div>
        <div>
          <input
            type="radio"
            id="Don'tknow"
            {...register("birth")}
            value="わからない"
            required
          />
          <label for="yes">わからない</label>
        </div>
        <div>
          {/* <input type="checkbox" id="no" {...register("birth")} />
          {newLocal} */}
        </div>
        <input type="submit" value="アンケートを提出する" />
      </form>
    </>
  );
}
