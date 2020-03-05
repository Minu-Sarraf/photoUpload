(ns hello-pic.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/hello-pic/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world 111!"}))

(def img-id "uploaded-image")
(def preview-src (atom ""))

(defn load-image [file-added-event]
  (let [file (first (array-seq (.. file-added-event -target -files)))
        file-reader (js/FileReader.)]
    (set! (.-onload file-reader)
          (fn [file-load-event]
            (reset! preview-src (-> file-load-event .-target .-result))
            (let [img (.getElementById js/document img-id)]
              (set! (.-onload img)
                    (fn [image-load]
                      (.log js/console "dimensions:" (.-width img) "x" (.-height img))) ))))
    (.readAsDataURL file-reader file)))

;(reagent/render [current-page] (.getElementById js/document "app"))

 (defn image-upload-fn []
  [:div [:h2 "image-upload"]
   [:input {:type "file" :on-change load-image}]
   [:img {:id img-id :src @preview-src}]])

(defn aa []
  [:div [:h2 "image"]])


(defn on-js-reload []
  (reagent/render [image-upload-fn] (js/document.getElementById "app")))
