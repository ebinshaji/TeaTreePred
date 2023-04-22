import numpy as np
import os
from flask import Flask, app,request,render_template
from tensorflow.keras import models
from tensorflow.keras.models import load model
from tensorflow.keras.preprocessing import image
from tensorflow.python.ops.gen_array_ops import concat
from tensorflow.keras.applications.inception v3 import preprocess_input
import requests
from flask import Flask, request, render_template, redirect, url_for
#Loading the model
modeln=load_model(r"vgg-16-Tea-Leaves-disease-model.h5")

app=Flask(_name_)

#default home page or route
def index():
    return render_template('index.html')


def teahome():
return render_template('Tryit.html')

#app.route('/teapred')
def teapred():
    return render_template('About.html')

app. route( '/Tryit' ,methods=["GET","POST"])
def nres():
    if request.method=="POST":
        f=request.files['image']
        basepath=os.path.dirname(_file_)
        filepath=os.path.join(basepath, 'uploads', f.filename)
        f.save(filepath)

        img=image.load_img(filepath, target size=(224,224))
        x=image.img_to_array(img)
        X=np.expand_dims(x, axis=0)
        img_data=preprocess_input(x)
        prediction=np.argmax(modeln.predict(img_data))

        index=['Anthracnose',
'algal Leaf',
'bird eye spot',
'brown blight',
'gray Light',
'heal thy',
'red Leaf spot',
'white spot']
        nresult = str(index[prediction])
        nresult
        return render_template('Tryit.html', prediction=nresult)
