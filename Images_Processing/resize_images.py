# import the necessary packages
from resizeimage import resizeimage
from PIL import Image
import argparse
import os


# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--input", required=True,
                help="path to file containing image URLs")
ap.add_argument("-o", "--output", required=True,
                help="path to output directory of images")
ap.add_argument("-n", "--numberimages", required=True,
                help="number of images")
args = vars(ap.parse_args())

total = 1
for i in range(int(args["numberimages"])):
    input_path = os.path.sep.join([args["input"], "{}.png".format(str(total).zfill(2))])

    try:
        with open(input_path, 'r+b') as f:
            with Image.open(f) as image:
                cover = resizeimage.resize_cover(image, [90, 50])
                out_path = os.path.sep.join([args["output"], "{}.png".format(str(total).zfill(2))])
                cover.save(out_path, image.format)
        total+=1
    except FileNotFoundError:
        print("Couldn't resize", out_path)
        total+=1
