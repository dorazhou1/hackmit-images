from flask import Flask, request
import subprocess

# from stable_diffusion_xl_turbo import generate_images
app = Flask(__name__)




@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/getimages', methods = ['GET', 'POST'])
def get_images():
    # generate_images(request.args.get('category'))
    subprocess.run(["modal", "run", "stable_diffusion/stable_diffusion_xl_turbo.py", "--category="+request.args.get('category')]) 
    return "generated!"

if __name__ == '__main__':
    app.run()