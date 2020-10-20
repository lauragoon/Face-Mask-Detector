import tensorflow as tf 

nomask = tf.io.read_file('./Face-Mask-Detector/0nomask.png')
mask = tf.io.read_file('./Face-Mask-Detector/0mask.jpg')


decodedmask = tf.image.decode_image(mask,3)
decodednomask = tf.image.decode_image(nomask,3)

print(decodedmask)