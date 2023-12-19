"use client";

import {
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useRouter } from "next/navigation";
import moment from "moment/moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";

function ExpensesList() {
  let router = useRouter();
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [date, setDate] = useState("");
  let [expenses, setExpenases] = useState("");

  const toastStyle = {
    background: "#000000",
    color: "#FFFFFF",
    autoClose: 1000,
    closeButton: false,
  };
  const progressStyle = {
    display: "none",
  };

  useEffect(() => {
    getExpenses();
  }, []);

  let collectionRef = collection(firestore, "expenses");
  async function addExpenses(e) {
    e.preventDefault();
    let uid = auth.currentUser.uid;
    console.log(title, amount);
    // alert("Expenses added successfully");
    toast("item added successfully");
    setTitle("");
    setAmount("");
    setDate("");
    await addDoc(collectionRef, {
      title: title,
      Price: amount,
      date: date,
      uid: uid,
    });
  }

  async function getExpenses() {
    if (auth.currentUser) {
      let collectionRef2 = collection(firestore, "expenses");
      let uid = auth.currentUser.uid;
      let queryExpenses = query(collectionRef2, where("uid", "==", uid));

      onSnapshot(queryExpenses, function (snapShot) {
        let newData = [];
        snapShot.docs.forEach((expenses) => {
          newData.push({ id: expenses.id, ...expenses.data() });
        });
        setExpenases(newData); // Update state here
      });
    }
  }

  async function expensesRemove(id) {
    let expensesRef3 = doc(firestore, "expenses", id);
    await deleteDoc(expensesRef3);
    // alert("delete Item successfully")
    toast("item deleted successfully");
  }

  return (
    <>
      <ToastContainer
        toastStyle={toastStyle}
        progressStyle={progressStyle}
        position="top-center"
        closeButton="false"
      />
      <section class="expenses">
        <div class="container mt-5">
          <div class="row justify-content-center ">
            <div class="col-md-6 text-center">
              <button
                class="text-dark bg-white"
                data-bs-toggle="modal"
                data-bs-target="#modalID"
              >
                +Add Expenses
              </button>
              <Link href={"/pricing"}>
                <button class="btn btn-link text-white">+Load Expenses</button>
              </Link>
            </div>

            {expenses &&
              expenses.map(function (expenses) {
                return (
                  <div class="row justify-content-center mt-4">
                    <div class="col-md-6">
                      <div class="card border-0 bg-transparent">
                        <div class="card-body bg-white  p-4 py-3  d-flex flex-row justify-content-between rounded-4">
                          <div>
                            <h2>{expenses.title}</h2>
                            <h5>{expenses.Price}$</h5>
                          </div>
                          <div class="buttongroup">
                            <button
                              class="btn btn-link text-white mt-3"
                              onClick={() => expensesRemove(expenses.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div class="modal" id="modalID">
            <div class="modal-dialog">
              <div class="modal-content p-3">
                <div class="modal-body">
                  <form onSubmit={addExpenses}>
                    <div class="mb-3">
                      <label class="mb-2 text-secondary">Expenses Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div class="mb-2">
                      <div class="row">
                        <div class="col">
                          <label class="mb-2 text-secondary">Amount</label>
                          <input
                            type="number"
                            class="form-control"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div class="col">
                          <label class="mb-2 text-secondary">Date</label>
                          <input
                            class="form-control"
                            type="date"
                            value={date}
                            onChange={(e) => {
                              let date = moment(e.target.value).format(
                                "MMM Do YYYY"
                              );
                              setDate(date);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer border-0 mt-0">
                  <button
                    class="btn btn-link text-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    cancel
                  </button>
                  <button
                    class="text-white"
                    type="submit"
                    data-bs-dismiss="modal"
                    onClick={addExpenses}
                  >
                    Add Expenses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default ExpensesList;
